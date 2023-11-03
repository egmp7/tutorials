using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Mounted in GameManager GameObject
public class GameState : MonoBehaviour
{
    // Subscribe 
    private void OnEnable()
    {
        EventManager.onPlayerDeath += RestartGame;
    }
    // Unsubscribe
    private void OnDisable()
    {
        EventManager.onPlayerDeath -= RestartGame;
    }
    void RestartGame()
    {
        Debug.Log("Restarting Game .....");
    }
}
