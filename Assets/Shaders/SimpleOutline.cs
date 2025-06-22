using UnityEngine;

/*
 *  One-script, Bridge-safe outline:
 *  ───────────────────────────────
 *  • duplicates the mesh as a child
 *  • scales it up slightly
 *  • renders only its back faces
 *
 *  Works in Edit mode, Play mode and Luna export.
 */

[RequireComponent(typeof(MeshFilter), typeof(MeshRenderer))]
public class SimpleOutline : MonoBehaviour
{
    [ColorUsage(false)] public Color outlineColor = Color.black;

    [Tooltip("Scale factor > 1 grows the duplicate mesh.\n" +
             "1.05 = +5 % ≈ 3-5 px on most ads.")]
    [Range(1.00f, 1.20f)] public float scaleFactor = 1.05f;
    [SerializeField] Material outlineMaterial;

    GameObject outlineGO;          // hidden child that shows the silhouette

    /* ───────────────── life cycle ───────────────── */
    void OnEnable() { Build(); }
    void OnValidate() { Build(); }   // live update in the editor
    void OnDisable() { Clear(); }

    /* ───────────────── helpers ──────────────────── */
    void Clear()
    {
        if (!outlineGO) return;
#if UNITY_EDITOR
        if (Application.isPlaying) Destroy(outlineGO);
        else                        DestroyImmediate(outlineGO);
#else
        Destroy(outlineGO);
#endif
    }

    void Build()
    {
        Clear();

        MeshFilter mf = GetComponent<MeshFilter>();
        if (mf == null || mf.sharedMesh == null) return;

        /* 1 — spawn invisible child */
        outlineGO = new GameObject("Outline");
        outlineGO.hideFlags = HideFlags.HideAndDontSave;
        outlineGO.transform.SetParent(transform, false);
        outlineGO.transform.localScale = Vector3.one * scaleFactor;

        /* 2 — share the mesh */
        outlineGO.AddComponent<MeshFilter>().sharedMesh = mf.sharedMesh;

        /* 3 — simple Unlit/Color material with front-face culling */
        var mr = outlineGO.AddComponent<MeshRenderer>();
        var mat = outlineMaterial != null ? outlineMaterial : new Material(Shader.Find("Unlit/Color"));
        mat.color = outlineColor;
        mat.renderQueue = (int)UnityEngine.Rendering.RenderQueue.Geometry + 1;

        // 0 = Off, 1 = Back, 2 = Front
        if (mat.HasProperty("_Cull"))
            mat.SetInt("_Cull", 2);

        mr.sharedMaterial = mat;
    }
}
