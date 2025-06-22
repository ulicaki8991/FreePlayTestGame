Shader "Hidden/Outline/SolidColor"
{
    Properties { _Color ("Color", Color) = (0,0,0,1) }

    SubShader
    {
        Tags { "RenderType"="Opaque"  "Queue"="Geometry+1" }
        Cull Front          // draw only the back faces
        ZWrite On           // **do** write depth
        ZTest  LEqual       // keep normal depth-testing
        Offset 1, 1         // push it a tad farther away

        Pass
        {
            Color [_Color]
        }
    }
}
