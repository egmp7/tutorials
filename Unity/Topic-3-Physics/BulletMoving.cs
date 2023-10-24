using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Mounted On Bullet
public class BulletMoving : MonoBehaviour
{
    [SerializeField]
    float force;
    Rigidbody rb;
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody>();
        rb.AddForce(transform.forward * force, ForceMode.Impulse);
    }
}
