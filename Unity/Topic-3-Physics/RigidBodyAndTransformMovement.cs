using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Mounted on Player
public class RigidBodyAndTransformMovement : MonoBehaviour
{
    [SerializeField] float movementSpeed;
    
    Camera cam;
    Rigidbody rb;
    
    void Start()
    {
        cam = Camera.main;
        rb = GetComponent<Rigidbody>();
    }

    void Update()
    {
        // Move towards mouse point using Transform
        // Vector2 mousePos = Input.mousePosition;
        // Vector3 worldPoint = new Vector3(mousePos.x, mousePos.y, cam.transform.position.y - transform.position.y);
        // Vector3 target = cam.ScreenToWorldPoint(worldPoint);
        // transform.LookAt(target);

        // Debug.DrawRay(cam.transform.position, target - cam.transform.position, Color.magenta);
    }

    private void FixedUpdate()
    {
        // Move towards mouse point using Rigid Body
        float forward = Input.GetAxisRaw("Vertical");
        float side = Input.GetAxisRaw("Horizontal");

        Vector3 newPos = new Vector3(side, 0, forward) * movementSpeed * Time.deltaTime;
        rb.MovePosition(transform.position + newPos);

        if (forward == 0 && side == 0)
        {
            rb.velocity = new Vector3(0, rb.velocity.y, 0);
        }
    }
}
