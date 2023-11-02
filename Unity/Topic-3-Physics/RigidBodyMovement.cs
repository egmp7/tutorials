using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Mounted On Bullet
public class RigidBodyMovement : MonoBehaviour
{
    [SerializeField] float force;
    Rigidbody rb;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
        rb.AddForce(transform.forward * force, ForceMode.Impulse);
    }
}
