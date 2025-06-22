using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    [Header("Follow Settings")]
    [SerializeField] public bool tracking = true;
    [SerializeField] public Vector3 EndTarget;
    public Transform target; // The object to follow (typically the player)
    public float smoothSpeed = 5f; // How smoothly the camera follows the target
    public Vector3 offset = new Vector3(0, 0, -10); // Offset from target (default for 2D: -10 on Z axis)

    private Vector3 velocity = Vector3.zero;

    void Start()
    {
        // If no target is set, try to find the player
        if (target == null)
        {
            GameObject player = GameObject.FindGameObjectWithTag("Player");
            if (player != null)
            {
                target = player.transform;
            }
        }
    }



    void FixedUpdate()
    {
        if (target == null) return;

        // Calculate desired position
        Vector3 desiredPosition = target.position + offset;

        if (tracking)
        {
            // Smoothly move the camera towards the desired position
            transform.position = Vector3.SmoothDamp(
                transform.position,
                desiredPosition,
                ref velocity,
                1f / smoothSpeed
            );
        }
        else
        {
            transform.position = Vector3.SmoothDamp(
           transform.position,
           EndTarget,
           ref velocity,
           1f / smoothSpeed
       );
        }
    }
}
