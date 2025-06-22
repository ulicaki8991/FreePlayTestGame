using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Player : MonoBehaviour
{
    [SerializeField] Slider powerSlider;
    [SerializeField] float power;
    [SerializeField] Rigidbody rb;
    [LunaPlaygroundField("Speed")]
    [SerializeField] float speed;
    [SerializeField] float maxSpeed;
    [SerializeField] Transform[] wheels;
    [SerializeField] Transform propeller;

    private bool isGrounded = false;
    [SerializeField] ParticleSystem windParticleSystem;
    [Header("Audio")]
    public bool controllSound = true;
    [SerializeField] AudioSource propellerAudio;


    public void CheckForWind()
    {
        if (power > 0.5f)
        {
            Debug.Log("Wind Particle System Play");
            windParticleSystem.Play();
        }
        else
        {
            Debug.Log("Wind Particle System Stop");
            windParticleSystem.Stop();
        }

    }

    void Update()
    {
        power = powerSlider.value;
        if (controllSound)
            propellerAudio.volume = power / 2;



        ApplyPowerForce();


        RotateWheels();


        RotatePropeller();
    }

    public void ApplyPowerForce()
    {
        Debug.Log("Speed: " + rb.velocity.magnitude);
        if (rb != null && isGrounded)
        {

            Vector3 forceDirection = transform.right;
            float forceAmount = power * speed;
            rb.AddForce(forceDirection * forceAmount * rb.mass, ForceMode.Force);



            if (rb.velocity.magnitude > maxSpeed)
            {
                rb.velocity = rb.velocity.normalized * maxSpeed;
            }
        }
    }

    void RotateWheels()
    {
        if (wheels != null && rb != null)
        {

            float currentSpeed = rb.velocity.magnitude;
            float rotationSpeed = currentSpeed * 60f;


            Vector3 rotationAxis = Vector3.down;
            foreach (Transform wheel in wheels)
            {
                if (wheel != null)
                {
                    wheel.Rotate(rotationAxis * rotationSpeed * Time.deltaTime);
                }
            }
        }
    }

    void RotatePropeller()
    {
        if (propeller != null)
        {

            float propellerRotationSpeed = power * 1500f;


            Vector3 rotationAxis = Vector3.right;
            propeller.Rotate(rotationAxis * propellerRotationSpeed * Time.deltaTime);
        }
    }

    void OnCollisionEnter(Collision collision)
    {

        if (!IsChildOfPlayer(collision.transform))
        {
            isGrounded = true;
        }
    }

    void OnCollisionStay(Collision collision)
    {

        if (!IsChildOfPlayer(collision.transform))
        {
            isGrounded = true;
        }
    }

    void OnCollisionExit(Collision collision)
    {

        if (!IsChildOfPlayer(collision.transform))
        {
            isGrounded = false;
        }
    }

    bool IsChildOfPlayer(Transform other)
    {

        Transform parent = other.parent;
        while (parent != null)
        {
            if (parent == transform)
            {
                return true;
            }
            parent = parent.parent;
        }
        return false;
    }
}
