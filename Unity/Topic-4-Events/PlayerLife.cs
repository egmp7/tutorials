using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Mounted in Player GameObject
public class PlayerLife : MonoBehaviour
{
    [SerializeField]
    int life;
    // Subscribe 
    private void OnEnable()
    {
        EventManager.onPlayerDeath += LoseLife;
    }
    // Unsubscribe
    private void OnDisable()
    {
        EventManager.onPlayerDeath -= LoseLife;
    }
    void Start()
    {
        life = 3;
    }
    void LoseLife()
    {
        life -= 1;
        Debug.Log("Got " + life + " lives left.");
    }
}
