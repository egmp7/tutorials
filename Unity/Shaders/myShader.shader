Shader "Unlit/myShader"
{
    Properties
    {
        _Amplitude ("Amplitude", Range(0,0.02))=0.1 
    }
    SubShader
    {
        Tags { "RenderType"="Opaque" }

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            #define TAU 6.2831855

            #include "UnityCG.cginc"

            float _Amplitude;

            struct Attributes
            {
                float4 vertex : POSITION;
                float2 uv0 : TEXCOORD0;
            };

            struct Varyings
            {
                float4 vertex : SV_POSITION;
                float2 uv : TEXCOORD0;
            };

            Varyings vert (Attributes v)
            {
                Varyings o;
                //float wave = v.vertex.y * cos( _Time.y ); makes objects to squeeze in y
                float wave = cos( v.uv0.y - _Time.y ) * TAU * 5;

                v.vertex.y = wave * _Amplitude ;
                o.vertex = UnityObjectToClipPos(v.vertex);

                o.uv = v.uv0;

                return o;
            }

            fixed4 frag (Varyings i) : SV_Target
            {
                float2 uvCentered = i.uv * 2 - 1;
                float radialDistance = length(uvCentered);


                float wave = cos(( radialDistance - _Time.y * 0.1 ) * TAU * 5) * 0.5 + 0.5;
                wave *= 1- radialDistance;
                return wave ;
            }
            ENDCG
        }
    }
}
