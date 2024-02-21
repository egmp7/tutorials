Shader "Unlit/shader1"
{
    Properties
    {
        _Scale("Scale",float) = 1.0
        _Offset("Offset",float) = 0.0
    }
    SubShader
    {
        Tags { "RenderType"="Opaque" }

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            #include "UnityCG.cginc"

            float _Scale;
            float _Offset;

            struct MeshData // per vertex mesh data
            {
                float4 vertex : POSITION;
                float3 normal: NORMAL;
                float4 uv0 : TEXCOORD0;
            };

            struct Interpolator
            {
                float4 vertex : SV_POSITION;  // clip space position
                float3 normal : TEXCOORD0;
                float2 uv0 : TEXCOORD1;
            };

            Interpolator vert (MeshData v)
            {
                Interpolator o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.normal = UnityObjectToWorldNormal( v.normal);
                o.uv0 = (v.uv0 + _Offset) * _Scale;
                //o.vertex = v.vertex;
                return o;
            }

            float4 frag (Interpolator i) : SV_Target
            {
                return float4( i.uv0,0, 1) ;
            }
            ENDCG
        }
    }
}
