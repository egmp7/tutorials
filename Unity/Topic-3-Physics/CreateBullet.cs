using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Mounted in SpawnPosition GameObject
public class CreateBullet : MonoBehaviour
{
    public GameObject bullet;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetButtonDown("Fire1"))
        {
            Instantiate(bullet, transform.position, transform.rotation);
        }
        
    }
}
