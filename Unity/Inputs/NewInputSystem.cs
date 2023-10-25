using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

/**
Steps to create controls with the new input system

1) Install the Input system manager
2) Add a PlayerInput component to player
3) Create an InputAction in the Project folder
4) Map Actions to buttons
5) Instantiate the class containing the actions
6) Work on this class to perform those events

**/
public class NewInputSystem : MonoBehaviour
{
    [SerializeField]
    float moveSpeed;
    [SerializeField]
    float turnSpeed;
    [SerializeField]
    float jumpForce;
    [SerializeField]

    Rigidbody rb;
    Vector2 moveVector = Vector2.zero;


    private PlayerControls input = null; // Class instantiated by an input actions
    private void Awake()
    {
        input = new PlayerControls();
        rb = GetComponent<Rigidbody>();
    }

    private void OnEnable()
    {
        input.Enable();
        input.Player.Move.performed += OnMove;
        input.Player.Move.canceled += OnMoveCancel;
        input.Player.Jump.performed += OnJump;
    }

    private void OnDisable()
    {
        input.Enable();
        input.Player.Move.performed -= OnMove;
        input.Player.Move.canceled -= OnMoveCancel;
    }

    private void FixedUpdate()
    {
        rb.AddForce(transform.forward * moveVector.y * moveSpeed);
        rb.AddTorque(transform.up * moveVector.x * turnSpeed);
    }

    public void OnMove(InputAction.CallbackContext value)
    {
        Debug.Log("Move");
        moveVector = value.ReadValue<Vector2>();
    }

    public void OnMoveCancel(InputAction.CallbackContext value)
    {
        Debug.Log("Stop Moving");
        moveVector = Vector2.zero;
    }

    public void OnJump(InputAction.CallbackContext value)
    {
        Debug.Log("Jump");
        rb.AddForce(transform.up * jumpForce, ForceMode.Impulse);
    }
}
