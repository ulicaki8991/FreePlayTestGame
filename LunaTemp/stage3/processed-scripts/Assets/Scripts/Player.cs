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


        // Apply force continuously based on power value
        ApplyPowerForce();

        // Rotate wheels based on current speed
        RotateWheels();

        // Rotate propeller based on power
        RotatePropeller();
    }

    public void ApplyPowerForce()
    {
        Debug.Log("Speed: " + rb.velocity.magnitude);
        if (rb != null && isGrounded)
        {
            // Apply force in object's local right direction based on power and speed
            Vector3 forceDirection = transform.right; // Local +X axis
            float forceAmount = power * speed;
            rb.AddForce(forceDirection * forceAmount * rb.mass, ForceMode.Force);


            // Clamp velocity to max speed
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
            // Calculate rotation speed based on current velocity
            float currentSpeed = rb.velocity.magnitude;
            float rotationSpeed = currentSpeed * 60f; // Adjust multiplier as needed

            // Rotate each wheel in the array
            Vector3 rotationAxis = Vector3.down; // X-axis
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
            // Calculate propeller rotation speed based on power value
            float propellerRotationSpeed = power * 1500f; // Adjust multiplier as needed

            // Rotate propeller around X-axis
            Vector3 rotationAxis = Vector3.right; // X-axis
            propeller.Rotate(rotationAxis * propellerRotationSpeed * Time.deltaTime);
        }
    }

    void OnCollisionEnter(Collision collision)
    {
        // Check if colliding object is not a child of this player
        if (!IsChildOfPlayer(collision.transform))
        {
            isGrounded = true;
        }
    }

    void OnCollisionStay(Collision collision)
    {
        // Maintain grounded state while in contact with valid surfaces
        if (!IsChildOfPlayer(collision.transform))
        {
            isGrounded = true;
        }
    }

    void OnCollisionExit(Collision collision)
    {
        // Check if we're still touching any valid surfaces
        if (!IsChildOfPlayer(collision.transform))
        {
            isGrounded = false;
        }
    }

    bool IsChildOfPlayer(Transform other)
    {
        // Check if the other transform is a child of this player
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
