(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,71714,e=>{"use strict";let t;var r,a=e.i(31067),n=e.i(90072),i=e.i(71645),o=e.i(33116),o=o,s=e.i(63020),l=e.i(95927);function c(e,t,r){let a=(0,l.useThree)(e=>e.size),o=(0,l.useThree)(e=>e.viewport),s="number"==typeof e?e:a.width*o.dpr,c="number"==typeof t?t:a.height*o.dpr,{samples:u=0,depth:m,...f}=("number"==typeof e?r:e)||{},d=i.useMemo(()=>{let e=new n.WebGLRenderTarget(s,c,{minFilter:n.LinearFilter,magFilter:n.LinearFilter,type:n.HalfFloatType,...f});return m&&(e.depthTexture=new n.DepthTexture(s,c,n.FloatType)),e.samples=u,e},[]);return i.useLayoutEffect(()=>{d.setSize(s,c),u&&(d.samples=u)},[u,d,s,c]),i.useEffect(()=>()=>d.dispose(),[]),d}var u=n;let m=(r={},(t=class extends u.ShaderMaterial{constructor(e={}){const t=Object.entries(r);super({uniforms:t.reduce((e,[t,r])=>{let a=u.UniformsUtils.clone({[t]:{value:r}});return{...e,...a}},{}),vertexShader:"void main() { }",fragmentShader:"void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }"}),this.key="",t.forEach(([e])=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t})),Object.assign(this,e)}}).key=u.MathUtils.generateUUID(),t);class f extends n.MeshPhysicalMaterial{constructor(e=6,t=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new n.Color("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=r=>{r.uniforms={...r.uniforms,...this.uniforms},this.anisotropy>0&&(r.defines.USE_ANISOTROPY=""),t?r.defines.USE_SAMPLER="":r.defines.USE_TRANSMISSION="",r.fragmentShader=`
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
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <transmission_pars_fragment>",`
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
`),r.fragmentShader=r.fragmentShader.replace("#include <transmission_fragment>",`  
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
`)},Object.keys(this.uniforms).forEach(e=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t}))}}let d=i.forwardRef(({buffer:e,transmissionSampler:t=!1,backside:r=!1,side:l=n.FrontSide,transmission:u=1,thickness:d=0,backsideThickness:h=0,backsideEnvMapIntensity:p=1,samples:v=10,resolution:x,backsideResolution:g,background:S,anisotropy:b,anisotropicBlur:M,...y},C)=>{let w,T,k,F;(0,o.e)({MeshTransmissionMaterial:f});let D=i.useRef(null),[j]=i.useState(()=>new m),R=c(g||x),E=c(x);return(0,s.useFrame)(e=>{D.current.time=e.clock.elapsedTime,D.current.buffer===E.texture&&!t&&(F=D.current.__r3f.parent)&&(k=e.gl.toneMapping,w=e.scene.background,T=D.current.envMapIntensity,e.gl.toneMapping=n.NoToneMapping,S&&(e.scene.background=S),F.material=j,r&&(e.gl.setRenderTarget(R),e.gl.render(e.scene,e.camera),F.material=D.current,F.material.buffer=R.texture,F.material.thickness=h,F.material.side=n.BackSide,F.material.envMapIntensity=p),e.gl.setRenderTarget(E),e.gl.render(e.scene,e.camera),F.material=D.current,F.material.thickness=d,F.material.side=l,F.material.buffer=E.texture,F.material.envMapIntensity=T,e.scene.background=w,e.gl.setRenderTarget(null),e.gl.toneMapping=k)}),i.useImperativeHandle(C,()=>D.current,[]),i.createElement("meshTransmissionMaterial",(0,a.default)({args:[v,t],ref:D},y,{buffer:e||E.texture,_transmission:u,anisotropicBlur:null!=M?M:b,transmission:t?u:0,thickness:d,side:l}))});e.s(["MeshTransmissionMaterial",0,d],71714)},18639,e=>{"use strict";var t=e.i(43476),r=e.i(75056),a=e.i(57528),n=e.i(71645),i=e.i(95927);function o(){let e=(0,i.useThree)(e=>e.get),t=(0,i.useThree)(e=>e.setEvents),r=(0,i.useThree)(e=>e.performance.current);return n.useEffect(()=>{let r=e().events.enabled;return()=>t({enabled:r})},[]),n.useEffect(()=>t({enabled:1===r}),[r]),null}var s=e.i(63020);let l=(0,n.createContext)(null);function c({iterations:e=10,ms:t=250,threshold:r=.75,step:a=.1,factor:i=.5,flipflops:o=1/0,bounds:u=e=>e>100?[60,100]:[40,60],onIncline:m,onDecline:f,onChange:d,onFallback:h,children:p}){let[v,x]=(0,n.useState)(()=>({fps:0,index:0,factor:i,flipped:0,refreshrate:0,fallback:!1,frames:[],averages:[],subscriptions:new Map,subscribe:e=>{let t=Symbol();return v.subscriptions.set(t,e.current),()=>void v.subscriptions.delete(t)}})),g=0;return(0,s.useFrame)(()=>{let{frames:n,averages:i}=v;if(!v.fallback&&i.length<e){n.push(performance.now());let s=n[n.length-1]-n[0];if(s>=t){if(v.fps=Math.round(n.length/s*1e3)/1,v.refreshrate=Math.max(v.refreshrate,v.fps),i[v.index++%e]=v.fps,i.length===e){let[t,n]=u(v.refreshrate),s=i.filter(e=>e>=n),l=i.filter(e=>e<t);s.length>e*r&&(v.factor=Math.min(1,v.factor+a),v.flipped++,m&&m(v),v.subscriptions.forEach(e=>e.onIncline&&e.onIncline(v))),l.length>e*r&&(v.factor=Math.max(0,v.factor-a),v.flipped++,f&&f(v),v.subscriptions.forEach(e=>e.onDecline&&e.onDecline(v))),g!==v.factor&&(g=v.factor,d&&d(v),v.subscriptions.forEach(e=>e.onChange&&e.onChange(v))),v.flipped>o&&!v.fallback&&(v.fallback=!0,h&&h(v),v.subscriptions.forEach(e=>e.onFallback&&e.onFallback(v))),v.averages=[]}v.frames=[]}}}),n.createElement(l.Provider,{value:v},p)}var u=e.i(19627),m=e.i(53190),f=e.i(71714);function d(){let e=(0,n.useRef)(null),r=(0,n.useRef)(null);return(0,s.useFrame)(t=>{let a=t.clock.getElapsedTime();e.current&&(e.current.rotation.x=.2*Math.sin(a/4),e.current.rotation.y=.3*Math.cos(a/2)),r.current&&(r.current.rotation.z=.15*a,r.current.rotation.x=.2*Math.sin(a/3))}),(0,t.jsxs)("group",{scale:1.3,children:[(0,t.jsx)(m.Float,{speed:2,rotationIntensity:.4,floatIntensity:.6,children:(0,t.jsxs)("mesh",{ref:e,children:[(0,t.jsx)("icosahedronGeometry",{args:[1.8,16]}),(0,t.jsx)(f.MeshTransmissionMaterial,{backside:!0,samples:8,resolution:256,transmission:.92,roughness:.15,clearcoat:.8,clearcoatRoughness:.1,thickness:.8,chromaticAberration:.3,anisotropy:.3,distortion:.2,distortionScale:.3,temporalDistortion:.1,color:"#0f172a"})]})}),(0,t.jsx)("group",{ref:r,children:(0,t.jsxs)("mesh",{children:[(0,t.jsx)("torusGeometry",{args:[2.8,.012,16,100]}),(0,t.jsx)("meshBasicMaterial",{color:"#38bdf8",wireframe:!0,transparent:!0,opacity:.4})]})})]})}var h=e.i(90072);function p(){return(0,s.useFrame)(e=>{e.camera.position.lerp(new h.Vector3(.5*e.pointer.x,.5*e.pointer.y,7),.05),e.camera.lookAt(0,0,0)}),null}e.s(["default",0,function(){return(0,t.jsx)("div",{className:"fixed inset-0 pointer-events-none z-0","aria-hidden":"true",children:(0,t.jsxs)(r.Canvas,{gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},dpr:[1,2],camera:{position:[0,0,6],fov:35},"aria-label":"Decorative 3D background",role:"img",children:[(0,t.jsx)(c,{onIncline:()=>{},onDecline:()=>{},flipflops:3,onFallback:()=>console.warn("WebGL perf regress — static fallback")}),(0,t.jsx)(a.AdaptiveDpr,{pixelated:!0}),(0,t.jsx)(o,{}),(0,t.jsxs)(n.Suspense,{fallback:null,children:[(0,t.jsx)("ambientLight",{intensity:.8}),(0,t.jsx)("directionalLight",{position:[10,10,5],intensity:1.5,color:"#38bdf8"}),(0,t.jsx)("pointLight",{position:[-10,-10,-5],intensity:.8,color:"#f43f5e"}),(0,t.jsx)(d,{}),(0,t.jsx)(p,{}),(0,t.jsx)(u.Preload,{all:!0})]})]})})}],18639)},99864,e=>{e.n(e.i(18639))}]);