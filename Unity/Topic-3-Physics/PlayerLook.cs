using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Mounted on Player
public class PlayerLook : MonoBehaviour
{
    public GameObject bullet;
    Rigidbody rb;
    Camera cam;
    Ray mouseRay;
    Vector3 hitPoint;
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody>();
        cam = Camera.main;
    }

    // Update is called once per frame
    void Update()
    {
        mouseRay = cam.ScreenPointToRay(Input.mousePosition);
        RaycastHit hitInfo;
        if (Physics.Raycast(mouseRay, out hitInfo, 100f))
        {
            hitPoint = hitInfo.point;
        }
        Vector3 lookTarget = new Vector3(hitPoint.x, transform.position.y, hitPoint.z);

        transform.LookAt(lookTarget);
        Debug.DrawRay(cam.transform.position, lookTarget - cam.transform.position, Color.green);

        if (Input.GetButtonDown("Fire1"))
        {
            Instantiate(bullet, transform.position, Quaternion.identity);
        }
    }

}
