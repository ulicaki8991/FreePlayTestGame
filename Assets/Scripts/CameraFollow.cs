using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    [Header("Follow Settings")]
    [SerializeField] public bool tracking = true;
    [SerializeField] public Vector3 EndTarget;
    public Transform target;
    public float smoothSpeed = 5f;
    public Vector3 offset = new Vector3(0, 0, -10);

    private Vector3 velocity = Vector3.zero;

    void Start()
    {

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


        Vector3 desiredPosition = target.position + offset;

        if (tracking)
        {

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
