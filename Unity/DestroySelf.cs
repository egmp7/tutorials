using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Mounted on Bullet
public class DestroySelf : MonoBehaviour
{
    [SerializeField]
    float seconds;
    void Start()
    {
        Destroy(gameObject, seconds);
    }

    void Update()
    {

    }
}
