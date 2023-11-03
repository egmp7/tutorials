using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

// Mounted in GameManager GameObject
public class EventManager : MonoBehaviour
{
    [SerializeField]
    UnityEvent onPlayerDied;
    void Update()
    {
        if(Input.GetButtonDown("Fire1"))
        {
            onPlayerDied.Invoke();
        }
    }
}
