using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Mounted in SoundManager GameObject
public class PlayerSound : MonoBehaviour
{
    // Subscribe 
    private void OnEnable()
    {
        EventManager.onPlayerDeath += PlayerDeathSound;
    }
    // Unsubscribe
    private void OnDisable()
    {
        EventManager.onPlayerDeath -= PlayerDeathSound;
    }
    AudioSource sounds;
    void Start()
    {
        sounds = GetComponent<AudioSource>();
    }

    void PlayerDeathSound()
    {
        sounds.Play();
    }
}
