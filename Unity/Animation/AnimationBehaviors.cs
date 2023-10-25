using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AnimationBehaviors : MonoBehaviour
{
    [SerializeField] Animator animatorController;    
    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.tag == "Enemy")
        {
            animatorController.SetTrigger("isSpinning");
            Debug.Log("Animator Controller Trigger");
        }
    }
}
