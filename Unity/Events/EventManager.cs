using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Checks singletons
// Mounted in GameManager GameObject
public class EventManager : MonoBehaviour
{
    public delegate void PlayerDeath();
    static public event PlayerDeath onPlayerDeath;
    void Update()
    {
        if(Input.GetButtonDown("Fire1"))
        {
            // First method
            // if (onPlayerDeath != null) 
            // {
            //     onPlayerDeath();
            // }

            // Second method
            onPlayerDeath?.Invoke(); // checks if there is subscribers
        }
    }
}
