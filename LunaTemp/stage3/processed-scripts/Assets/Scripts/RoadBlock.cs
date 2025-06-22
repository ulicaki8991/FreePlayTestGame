using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class RoadBlock : MonoBehaviour
{
    [SerializeField] float waitingTime;
    [SerializeField] float fallTime;
    bool triggered;
    Rigidbody rb;

    [SerializeField] AudioSource audioSource;
    [SerializeField] AudioClip breakSound;
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Player") && !triggered)
        {
            triggered = true;
            StartCoroutine(Fall());
        }
    }

    IEnumerator Fall()
    {
        yield return new WaitForSeconds(waitingTime);

        triggered = true;
        rb.isKinematic = false;
        DOVirtual.Float(4, 0, fallTime, (x) =>
        {
            rb.drag = x;
        });
        audioSource.PlayOneShot(breakSound);
    }


}
