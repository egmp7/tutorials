using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OldInputSystem : MonoBehaviour
{
    Rigidbody rb;
    [SerializeField]
    float moveSpeed;
    [SerializeField]
    float turnSpeed;
    [SerializeField]
    float jumpForce;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    private void FixedUpdate()
    {
        float move = Input.GetAxis("Vertical");
        float turn = Input.GetAxis("Horizontal");

        rb.AddForce(transform.forward * move * moveSpeed);
        rb.AddTorque(transform.up * turn * turnSpeed);

        if (Input.GetButtonDown("Jump"))
        {
            rb.AddForce(transform.up * jumpForce, ForceMode.Impulse);
        }
    }
}
