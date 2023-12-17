if (_input.move != Vector2.zero)
{
    // If there is a non-zero movement input

    // Convert 2D input to a normalized 3D vector (ignores the vertical component)
    Vector3 inputDirection = new Vector3(_input.move.x, 0.0f, _input.move.y).normalized;

    // Calculate the target rotation based on the input direction and the camera's current rotation
    _targetRotation = Mathf.Atan2(inputDirection.x, inputDirection.z) * Mathf.Rad2Deg + _mainCamera.transform.eulerAngles.y;

    // Use SmoothDamp to smoothly rotate the player towards the target rotation
    float rotation = Mathf.SmoothDampAngle(transform.eulerAngles.y, _targetRotation, ref _rotationVelocity, RotationSmoothTime);

    // Rotate the player to face the input direction relative to the camera position
    transform.rotation = Quaternion.Euler(0.0f, rotation, 0.0f);

    // Calculate the movement direction based on the target rotation
    Vector3 targetDirection = Quaternion.Euler(0.0f, _targetRotation, 0.0f) * Vector3.forward;

    // Move the player using the CharacterController in the calculated direction with a speed factor
    _controller.Move(targetDirection.normalized * (MoveSpeed * Time.deltaTime));
}

private void CameraRotation()
{
    // get input values
    _cinemachineTargetYaw += _input.look.x;
    _cinemachineTargetPitch += _input.look.y;

    // clamp our rotations so our values are limited 360 degrees
    _cinemachineTargetYaw = ClampAngle(_cinemachineTargetYaw, float.MinValue, float.MaxValue);
    _cinemachineTargetPitch = ClampAngle(_cinemachineTargetPitch, BottomClamp, TopClamp);

    // Cinemachine will follow this target
    CinemachineCameraTarget.transform.rotation = Quaternion.Euler(_cinemachineTargetPitch, _cinemachineTargetYaw, 0.0f);
}
