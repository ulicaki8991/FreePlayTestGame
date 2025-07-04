using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EndForce : MonoBehaviour
{
    [SerializeField] float force;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Player"))
        {
            Rigidbody playerRb = other.gameObject.GetComponent<Rigidbody>();
            playerRb.AddForce(-playerRb.velocity * force, ForceMode.Impulse);
        }
    }
}
