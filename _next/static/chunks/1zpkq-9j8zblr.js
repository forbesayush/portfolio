(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,71714,e=>{"use strict";let t;var n,o=e.i(31067),a=e.i(90072),i=e.i(71645),r=e.i(33116),r=r,s=e.i(63020),l=e.i(95927);function c(e,t,n){let o=(0,l.useThree)(e=>e.size),r=(0,l.useThree)(e=>e.viewport),s="number"==typeof e?e:o.width*r.dpr,c="number"==typeof t?t:o.height*r.dpr,{samples:m=0,depth:u,...d}=("number"==typeof e?n:e)||{},h=i.useMemo(()=>{let e=new a.WebGLRenderTarget(s,c,{minFilter:a.LinearFilter,magFilter:a.LinearFilter,type:a.HalfFloatType,...d});return u&&(e.depthTexture=new a.DepthTexture(s,c,a.FloatType)),e.samples=m,e},[]);return i.useLayoutEffect(()=>{h.setSize(s,c),m&&(h.samples=m)},[m,h,s,c]),i.useEffect(()=>()=>h.dispose(),[]),h}var m=a;let u=(n={},(t=class extends m.ShaderMaterial{constructor(e={}){const t=Object.entries(n);super({uniforms:t.reduce((e,[t,n])=>{let o=m.UniformsUtils.clone({[t]:{value:n}});return{...e,...o}},{}),vertexShader:"void main() { }",fragmentShader:"void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }"}),this.key="",t.forEach(([e])=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t})),Object.assign(this,e)}}).key=m.MathUtils.generateUUID(),t);class d extends a.MeshPhysicalMaterial{constructor(e=6,t=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new a.Color("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=n=>{n.uniforms={...n.uniforms,...this.uniforms},this.anisotropy>0&&(n.defines.USE_ANISOTROPY=""),t?n.defines.USE_SAMPLER="":n.defines.USE_TRANSMISSION="",n.fragmentShader=`
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <transmission_pars_fragment>",`
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
            // Direction of refracted light.
            vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
            // Compute rotation-independant scaling of the model matrix.
            vec3 modelScale;
            modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
            modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
            modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
            if ( isinf( attenuationDistance ) ) {
              // Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
              return radiance;
            } else {
              // Compute light attenuation using Beer's law.
              vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
              vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
              return transmittance * radiance;
            }
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in vec3 attenuationColor, const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            // Get the specular component.
            vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`),n.fragmentShader=n.fragmentShader.replace("#include <transmission_fragment>",`  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        vec3 pos = vWorldPosition;
        float runningSeed = 0.0;
        vec3 v = normalize( cameraPosition - pos );
        vec3 n = inverseTransformDirection( normal, viewMatrix );
        vec3 transmission = vec3(0.0);
        float transmissionR, transmissionB, transmissionG;
        float randomCoords = rand(runningSeed++);
        float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
        vec3 distortionNormal = vec3(0.0);
        vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
        if (distortion > 0.0) {
          distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
        }
        for (float i = 0.0; i < ${e}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${e})) , material.thickness + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${e})), material.thickness + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${e}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
`)},Object.keys(this.uniforms).forEach(e=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t}))}}let h=i.forwardRef(({buffer:e,transmissionSampler:t=!1,backside:n=!1,side:l=a.FrontSide,transmission:m=1,thickness:h=0,backsideThickness:p=0,backsideEnvMapIntensity:f=1,samples:v=10,resolution:g,backsideResolution:b,background:x,anisotropy:y,anisotropicBlur:E,...M},T)=>{let O,S,j,w;(0,r.e)({MeshTransmissionMaterial:d});let P=i.useRef(null),[C]=i.useState(()=>new u),A=c(b||g),L=c(g);return(0,s.useFrame)(e=>{P.current.time=e.clock.elapsedTime,P.current.buffer===L.texture&&!t&&(w=P.current.__r3f.parent)&&(j=e.gl.toneMapping,O=e.scene.background,S=P.current.envMapIntensity,e.gl.toneMapping=a.NoToneMapping,x&&(e.scene.background=x),w.material=C,n&&(e.gl.setRenderTarget(A),e.gl.render(e.scene,e.camera),w.material=P.current,w.material.buffer=A.texture,w.material.thickness=p,w.material.side=a.BackSide,w.material.envMapIntensity=f),e.gl.setRenderTarget(L),e.gl.render(e.scene,e.camera),w.material=P.current,w.material.thickness=h,w.material.side=l,w.material.buffer=L.texture,w.material.envMapIntensity=S,e.scene.background=O,e.gl.setRenderTarget(null),e.gl.toneMapping=j)}),i.useImperativeHandle(T,()=>P.current,[]),i.createElement("meshTransmissionMaterial",(0,o.default)({args:[v,t],ref:P},M,{buffer:e||L.texture,_transmission:m,anisotropicBlur:null!=E?E:y,transmission:t?m:0,thickness:h,side:l}))});e.s(["MeshTransmissionMaterial",0,h],71714)},30297,e=>{"use strict";var t=e.i(31067),n=e.i(95927),o=e.i(63020),a=e.i(71645),i=e.i(90072),r=Object.defineProperty;class s{constructor(){((e,t)=>{let n,o;o=void 0,(n="symbol"!=typeof t?t+"":t)in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o})(this,"_listeners")}addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let n=this._listeners;void 0===n[e]&&(n[e]=[]),-1===n[e].indexOf(t)&&n[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let n=this._listeners;return void 0!==n[e]&&-1!==n[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let n=this._listeners[e];if(void 0!==n){let e=n.indexOf(t);-1!==e&&n.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners[e.type];if(void 0!==t){e.target=this;let n=t.slice(0);for(let t=0,o=n.length;t<o;t++)n[t].call(this,e);e.target=null}}}var l=Object.defineProperty,c=(e,t,n)=>{let o;return(o="symbol"!=typeof t?t+"":t)in e?l(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,n};let m=new i.Ray,u=new i.Plane,d=Math.cos(Math.PI/180*70),h=(e,t)=>(e%t+t)%t;class p extends s{constructor(e,t){super(),c(this,"object"),c(this,"domElement"),c(this,"enabled",!0),c(this,"target",new i.Vector3),c(this,"minDistance",0),c(this,"maxDistance",1/0),c(this,"minZoom",0),c(this,"maxZoom",1/0),c(this,"minPolarAngle",0),c(this,"maxPolarAngle",Math.PI),c(this,"minAzimuthAngle",-1/0),c(this,"maxAzimuthAngle",1/0),c(this,"enableDamping",!1),c(this,"dampingFactor",.05),c(this,"enableZoom",!0),c(this,"zoomSpeed",1),c(this,"enableRotate",!0),c(this,"rotateSpeed",1),c(this,"enablePan",!0),c(this,"panSpeed",1),c(this,"screenSpacePanning",!0),c(this,"keyPanSpeed",7),c(this,"zoomToCursor",!1),c(this,"autoRotate",!1),c(this,"autoRotateSpeed",2),c(this,"reverseOrbit",!1),c(this,"reverseHorizontalOrbit",!1),c(this,"reverseVerticalOrbit",!1),c(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),c(this,"mouseButtons",{LEFT:i.MOUSE.ROTATE,MIDDLE:i.MOUSE.DOLLY,RIGHT:i.MOUSE.PAN}),c(this,"touches",{ONE:i.TOUCH.ROTATE,TWO:i.TOUCH.DOLLY_PAN}),c(this,"target0"),c(this,"position0"),c(this,"zoom0"),c(this,"_domElementKeyEvents",null),c(this,"getPolarAngle"),c(this,"getAzimuthalAngle"),c(this,"setPolarAngle"),c(this,"setAzimuthalAngle"),c(this,"getDistance"),c(this,"getZoomScale"),c(this,"listenToKeyEvents"),c(this,"stopListenToKeyEvents"),c(this,"saveState"),c(this,"reset"),c(this,"update"),c(this,"connect"),c(this,"dispose"),c(this,"dollyIn"),c(this,"dollyOut"),c(this,"getScale"),c(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>f.phi,this.getAzimuthalAngle=()=>f.theta,this.setPolarAngle=e=>{let t=h(e,2*Math.PI),o=f.phi;o<0&&(o+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-o);2*Math.PI-a<a&&(t<o?t+=2*Math.PI:o+=2*Math.PI),v.phi=t-o,n.update()},this.setAzimuthalAngle=e=>{let t=h(e,2*Math.PI),o=f.theta;o<0&&(o+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-o);2*Math.PI-a<a&&(t<o?t+=2*Math.PI:o+=2*Math.PI),v.theta=t-o,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",ee),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(o),n.update(),l=s.NONE},this.update=(()=>{let t=new i.Vector3,a=new i.Vector3(0,1,0),r=new i.Quaternion().setFromUnitVectors(e.up,a),c=r.clone().invert(),h=new i.Vector3,x=new i.Quaternion,y=2*Math.PI;return function(){let E=n.object.position;r.setFromUnitVectors(e.up,a),c.copy(r).invert(),t.copy(E).sub(n.target),t.applyQuaternion(r),f.setFromVector3(t),n.autoRotate&&l===s.NONE&&I(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(f.theta+=v.theta*n.dampingFactor,f.phi+=v.phi*n.dampingFactor):(f.theta+=v.theta,f.phi+=v.phi);let M=n.minAzimuthAngle,T=n.maxAzimuthAngle;isFinite(M)&&isFinite(T)&&(M<-Math.PI?M+=y:M>Math.PI&&(M-=y),T<-Math.PI?T+=y:T>Math.PI&&(T-=y),M<=T?f.theta=Math.max(M,Math.min(T,f.theta)):f.theta=f.theta>(M+T)/2?Math.max(M,f.theta):Math.min(T,f.theta)),f.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,f.phi)),f.makeSafe(),!0===n.enableDamping?n.target.addScaledVector(b,n.dampingFactor):n.target.add(b),n.zoomToCursor&&A||n.object.isOrthographicCamera?f.radius=V(f.radius):f.radius=V(f.radius*g),t.setFromSpherical(f),t.applyQuaternion(c),E.copy(n.target).add(t),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),!0===n.enableDamping?(v.theta*=1-n.dampingFactor,v.phi*=1-n.dampingFactor,b.multiplyScalar(1-n.dampingFactor)):(v.set(0,0,0),b.set(0,0,0));let O=!1;if(n.zoomToCursor&&A){let o=null;if(n.object instanceof i.PerspectiveCamera&&n.object.isPerspectiveCamera){let e=t.length();o=V(e*g);let a=e-o;n.object.position.addScaledVector(P,a),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let e=new i.Vector3(C.x,C.y,0);e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/g)),n.object.updateProjectionMatrix(),O=!0;let a=new i.Vector3(C.x,C.y,0);a.unproject(n.object),n.object.position.sub(a).add(e),n.object.updateMatrixWorld(),o=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;null!==o&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(o).add(n.object.position):(m.origin.copy(n.object.position),m.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(m.direction))<d?e.lookAt(n.target):(u.setFromNormalAndCoplanarPoint(n.object.up,n.target),m.intersectPlane(u,n.target))))}else n.object instanceof i.OrthographicCamera&&n.object.isOrthographicCamera&&(O=1!==g)&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/g)),n.object.updateProjectionMatrix());return g=1,A=!1,!!(O||h.distanceToSquared(n.object.position)>p||8*(1-x.dot(n.object.quaternion))>p)&&(n.dispatchEvent(o),h.copy(n.object.position),x.copy(n.object.quaternion),O=!1,!0)}})(),this.connect=e=>{n.domElement=e,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",et),n.domElement.addEventListener("pointerdown",$),n.domElement.addEventListener("pointercancel",Q),n.domElement.addEventListener("wheel",J)},this.dispose=()=>{var e,t,o,a,i,r;n.domElement&&(n.domElement.style.touchAction="auto"),null==(e=n.domElement)||e.removeEventListener("contextmenu",et),null==(t=n.domElement)||t.removeEventListener("pointerdown",$),null==(o=n.domElement)||o.removeEventListener("pointercancel",Q),null==(a=n.domElement)||a.removeEventListener("wheel",J),null==(i=n.domElement)||i.ownerDocument.removeEventListener("pointermove",q),null==(r=n.domElement)||r.ownerDocument.removeEventListener("pointerup",Q),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",ee)};const n=this,o={type:"change"},a={type:"start"},r={type:"end"},s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=s.NONE;const p=1e-6,f=new i.Spherical,v=new i.Spherical;let g=1;const b=new i.Vector3,x=new i.Vector2,y=new i.Vector2,E=new i.Vector2,M=new i.Vector2,T=new i.Vector2,O=new i.Vector2,S=new i.Vector2,j=new i.Vector2,w=new i.Vector2,P=new i.Vector3,C=new i.Vector2;let A=!1;const L=[],R={};function D(){return Math.pow(.95,n.zoomSpeed)}function I(e){n.reverseOrbit||n.reverseHorizontalOrbit?v.theta+=e:v.theta-=e}function k(e){n.reverseOrbit||n.reverseVerticalOrbit?v.phi+=e:v.phi-=e}const N=(()=>{let e=new i.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),b.add(e)}})(),_=(()=>{let e=new i.Vector3;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),b.add(e)}})(),z=(()=>{let e=new i.Vector3;return function(t,o){let a=n.domElement;if(a&&n.object instanceof i.PerspectiveCamera&&n.object.isPerspectiveCamera){let i=n.object.position;e.copy(i).sub(n.target);let r=e.length();N(2*t*(r*=Math.tan(n.object.fov/2*Math.PI/180))/a.clientHeight,n.object.matrix),_(2*o*r/a.clientHeight,n.object.matrix)}else a&&n.object instanceof i.OrthographicCamera&&n.object.isOrthographicCamera?(N(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),_(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function F(e){n.object instanceof i.PerspectiveCamera&&n.object.isPerspectiveCamera||n.object instanceof i.OrthographicCamera&&n.object.isOrthographicCamera?g=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(e){if(!n.zoomToCursor||!n.domElement)return;A=!0;let t=n.domElement.getBoundingClientRect(),o=e.clientX-t.left,a=e.clientY-t.top,i=t.width,r=t.height;C.x=o/i*2-1,C.y=-(a/r*2)+1,P.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function V(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function Y(e){x.set(e.clientX,e.clientY)}function B(e){M.set(e.clientX,e.clientY)}function H(){if(1==L.length)x.set(L[0].pageX,L[0].pageY);else{let e=.5*(L[0].pageX+L[1].pageX),t=.5*(L[0].pageY+L[1].pageY);x.set(e,t)}}function X(){if(1==L.length)M.set(L[0].pageX,L[0].pageY);else{let e=.5*(L[0].pageX+L[1].pageX),t=.5*(L[0].pageY+L[1].pageY);M.set(e,t)}}function K(){let e=L[0].pageX-L[1].pageX,t=L[0].pageY-L[1].pageY,n=Math.sqrt(e*e+t*t);S.set(0,n)}function Z(e){if(1==L.length)y.set(e.pageX,e.pageY);else{let t=eo(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);y.set(n,o)}E.subVectors(y,x).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(I(2*Math.PI*E.x/t.clientHeight),k(2*Math.PI*E.y/t.clientHeight)),x.copy(y)}function G(e){if(1==L.length)T.set(e.pageX,e.pageY);else{let t=eo(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);T.set(n,o)}O.subVectors(T,M).multiplyScalar(n.panSpeed),z(O.x,O.y),M.copy(T)}function W(e){var t;let o=eo(e),a=e.pageX-o.x,i=e.pageY-o.y,r=Math.sqrt(a*a+i*i);j.set(0,r),w.set(0,Math.pow(j.y/S.y,n.zoomSpeed)),t=w.y,F(g/t),S.copy(j)}function $(e){var t,o,r;!1!==n.enabled&&(0===L.length&&(null==(t=n.domElement)||t.ownerDocument.addEventListener("pointermove",q),null==(o=n.domElement)||o.ownerDocument.addEventListener("pointerup",Q)),r=e,L.push(r),"touch"===e.pointerType?function(e){switch(en(e),L.length){case 1:switch(n.touches.ONE){case i.TOUCH.ROTATE:if(!1===n.enableRotate)return;H(),l=s.TOUCH_ROTATE;break;case i.TOUCH.PAN:if(!1===n.enablePan)return;X(),l=s.TOUCH_PAN;break;default:l=s.NONE}break;case 2:switch(n.touches.TWO){case i.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&K(),n.enablePan&&X(),l=s.TOUCH_DOLLY_PAN;break;case i.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&K(),n.enableRotate&&H(),l=s.TOUCH_DOLLY_ROTATE;break;default:l=s.NONE}break;default:l=s.NONE}l!==s.NONE&&n.dispatchEvent(a)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case i.MOUSE.DOLLY:if(!1===n.enableZoom)return;U(e),S.set(e.clientX,e.clientY),l=s.DOLLY;break;case i.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;B(e),l=s.PAN}else{if(!1===n.enableRotate)return;Y(e),l=s.ROTATE}break;case i.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;Y(e),l=s.ROTATE}else{if(!1===n.enablePan)return;B(e),l=s.PAN}break;default:l=s.NONE}l!==s.NONE&&n.dispatchEvent(a)}(e))}function q(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(en(e),l){case s.TOUCH_ROTATE:if(!1===n.enableRotate)return;Z(e),n.update();break;case s.TOUCH_PAN:if(!1===n.enablePan)return;G(e),n.update();break;case s.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&W(e),n.enablePan&&G(e),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&W(e),n.enableRotate&&Z(e),n.update();break;default:l=s.NONE}}(e):function(e){if(!1!==n.enabled)switch(l){case s.ROTATE:let t;if(!1===n.enableRotate)return;y.set(e.clientX,e.clientY),E.subVectors(y,x).multiplyScalar(n.rotateSpeed),(t=n.domElement)&&(I(2*Math.PI*E.x/t.clientHeight),k(2*Math.PI*E.y/t.clientHeight)),x.copy(y),n.update();break;case s.DOLLY:var o,a;if(!1===n.enableZoom)return;(j.set(e.clientX,e.clientY),w.subVectors(j,S),w.y>0)?(o=D(),F(g/o)):w.y<0&&(a=D(),F(g*a)),S.copy(j),n.update();break;case s.PAN:if(!1===n.enablePan)return;T.set(e.clientX,e.clientY),O.subVectors(T,M).multiplyScalar(n.panSpeed),z(O.x,O.y),M.copy(T),n.update()}}(e))}function Q(e){var t,o,a;(function(e){delete R[e.pointerId];for(let t=0;t<L.length;t++)if(L[t].pointerId==e.pointerId)return void L.splice(t,1)})(e),0===L.length&&(null==(t=n.domElement)||t.releasePointerCapture(e.pointerId),null==(o=n.domElement)||o.ownerDocument.removeEventListener("pointermove",q),null==(a=n.domElement)||a.ownerDocument.removeEventListener("pointerup",Q)),n.dispatchEvent(r),l=s.NONE}function J(e){if(!1!==n.enabled&&!1!==n.enableZoom&&(l===s.NONE||l===s.ROTATE)){var t,o;e.preventDefault(),n.dispatchEvent(a),(U(e),e.deltaY<0)?(t=D(),F(g*t)):e.deltaY>0&&(o=D(),F(g/o)),n.update(),n.dispatchEvent(r)}}function ee(e){if(!1!==n.enabled&&!1!==n.enablePan){let t=!1;switch(e.code){case n.keys.UP:z(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:z(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:z(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:z(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}}function et(e){!1!==n.enabled&&e.preventDefault()}function en(e){let t=R[e.pointerId];void 0===t&&(t=new i.Vector2,R[e.pointerId]=t),t.set(e.pageX,e.pageY)}function eo(e){return R[(e.pointerId===L[0].pointerId?L[1]:L[0]).pointerId]}this.dollyIn=(e=D())=>{F(g*e),n.update()},this.dollyOut=(e=D())=>{F(g/e),n.update()},this.getScale=()=>g,this.setScale=e=>{F(e),n.update()},this.getZoomScale=()=>D(),void 0!==t&&this.connect(t),this.update()}}let f=a.forwardRef(({makeDefault:e,camera:i,regress:r,domElement:s,enableDamping:l=!0,keyEvents:c=!1,onChange:m,onStart:u,onEnd:d,...h},f)=>{let v=(0,n.useThree)(e=>e.invalidate),g=(0,n.useThree)(e=>e.camera),b=(0,n.useThree)(e=>e.gl),x=(0,n.useThree)(e=>e.events),y=(0,n.useThree)(e=>e.setEvents),E=(0,n.useThree)(e=>e.set),M=(0,n.useThree)(e=>e.get),T=(0,n.useThree)(e=>e.performance),O=i||g,S=s||x.connected||b.domElement,j=a.useMemo(()=>new p(O),[O]);return(0,o.useFrame)(()=>{j.enabled&&j.update()},-1),a.useEffect(()=>(c&&j.connect(!0===c?S:c),j.connect(S),()=>void j.dispose()),[c,S,r,j,v]),a.useEffect(()=>{let e=e=>{v(),r&&T.regress(),m&&m(e)},t=e=>{u&&u(e)},n=e=>{d&&d(e)};return j.addEventListener("change",e),j.addEventListener("start",t),j.addEventListener("end",n),()=>{j.removeEventListener("start",t),j.removeEventListener("end",n),j.removeEventListener("change",e)}},[m,u,d,j,v,y]),a.useEffect(()=>{if(e){let e=M().controls;return E({controls:j}),()=>E({controls:e})}},[e,j]),a.createElement("primitive",(0,t.default)({ref:f,object:j,enableDamping:l},h))});e.s(["OrbitControls",0,f],30297)},66728,e=>{"use strict";var t=e.i(43476),n=e.i(71645),o=e.i(75056),a=e.i(63020),i=e.i(30297),r=e.i(53190),s=e.i(71714),l=e.i(57528),c=e.i(19627);function m(){let e=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,a.useFrame)(t=>{let n=t.clock.getElapsedTime();e.current&&(e.current.rotation.y=.3*n,e.current.rotation.x=.15*Math.sin(.2*n)),o.current&&(o.current.rotation.z=-(.15*n))}),(0,t.jsxs)("group",{scale:1.35,children:[(0,t.jsx)(r.Float,{speed:2.5,rotationIntensity:.5,floatIntensity:.7,children:(0,t.jsxs)("mesh",{ref:e,children:[(0,t.jsx)("octahedronGeometry",{args:[1.7,3]}),(0,t.jsx)(s.MeshTransmissionMaterial,{backside:!0,samples:16,resolution:512,transmission:.96,roughness:.05,clearcoat:1,clearcoatRoughness:.05,thickness:1.2,chromaticAberration:.8,anisotropy:.5,distortion:.1,distortionScale:.2,temporalDistortion:.05,color:"#ffffff",ior:2.42})]})}),(0,t.jsx)("group",{ref:o,children:(0,t.jsxs)("mesh",{children:[(0,t.jsx)("torusGeometry",{args:[2.5,.015,16,100]}),(0,t.jsx)("meshBasicMaterial",{color:"#38bdf8",transparent:!0,opacity:.4,wireframe:!0})]})})]})}e.s(["default",0,function({metalColor:e="#e2e8f0"}){return(0,t.jsx)("div",{className:"w-full h-[500px] md:h-[650px] relative",children:(0,t.jsxs)(o.Canvas,{camera:{position:[0,0,6.5],fov:45},gl:{powerPreference:"high-performance",antialias:!0,alpha:!0},children:[(0,t.jsx)(l.AdaptiveDpr,{pixelated:!0}),(0,t.jsx)("ambientLight",{intensity:1.5}),(0,t.jsx)("directionalLight",{position:[10,10,5],intensity:2.5,color:"#ffffff"}),(0,t.jsx)("pointLight",{position:[-10,-5,-5],intensity:2,color:"#38bdf8"}),(0,t.jsx)("pointLight",{position:[5,10,-5],intensity:1.8,color:"#e0e7ff"}),(0,t.jsx)(m,{}),(0,t.jsx)(i.OrbitControls,{enableZoom:!1,autoRotate:!0,autoRotateSpeed:1,maxPolarAngle:Math.PI/1.8,minPolarAngle:Math.PI/2.5}),(0,t.jsx)(c.Preload,{all:!0})]})})}])},44831,e=>{e.n(e.i(66728))}]);