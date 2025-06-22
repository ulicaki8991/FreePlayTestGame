var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2630 = root || request.c( 'UnityEngine.JointSpring' )
  var i2631 = data
  i2630.spring = i2631[0]
  i2630.damper = i2631[1]
  i2630.targetPosition = i2631[2]
  return i2630
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2632 = root || request.c( 'UnityEngine.JointMotor' )
  var i2633 = data
  i2632.m_TargetVelocity = i2633[0]
  i2632.m_Force = i2633[1]
  i2632.m_FreeSpin = i2633[2]
  return i2632
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2634 = root || request.c( 'UnityEngine.JointLimits' )
  var i2635 = data
  i2634.m_Min = i2635[0]
  i2634.m_Max = i2635[1]
  i2634.m_Bounciness = i2635[2]
  i2634.m_BounceMinVelocity = i2635[3]
  i2634.m_ContactDistance = i2635[4]
  i2634.minBounce = i2635[5]
  i2634.maxBounce = i2635[6]
  return i2634
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2636 = root || request.c( 'UnityEngine.JointDrive' )
  var i2637 = data
  i2636.m_PositionSpring = i2637[0]
  i2636.m_PositionDamper = i2637[1]
  i2636.m_MaximumForce = i2637[2]
  i2636.m_UseAcceleration = i2637[3]
  return i2636
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2638 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2639 = data
  i2638.m_Spring = i2639[0]
  i2638.m_Damper = i2639[1]
  return i2638
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2640 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2641 = data
  i2640.m_Limit = i2641[0]
  i2640.m_Bounciness = i2641[1]
  i2640.m_ContactDistance = i2641[2]
  return i2640
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2642 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2643 = data
  i2642.m_ExtremumSlip = i2643[0]
  i2642.m_ExtremumValue = i2643[1]
  i2642.m_AsymptoteSlip = i2643[2]
  i2642.m_AsymptoteValue = i2643[3]
  i2642.m_Stiffness = i2643[4]
  return i2642
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2644 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2645 = data
  i2644.m_LowerAngle = i2645[0]
  i2644.m_UpperAngle = i2645[1]
  return i2644
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2646 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2647 = data
  i2646.m_MotorSpeed = i2647[0]
  i2646.m_MaximumMotorTorque = i2647[1]
  return i2646
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2648 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2649 = data
  i2648.m_DampingRatio = i2649[0]
  i2648.m_Frequency = i2649[1]
  i2648.m_Angle = i2649[2]
  return i2648
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2650 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2651 = data
  i2650.m_LowerTranslation = i2651[0]
  i2650.m_UpperTranslation = i2651[1]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2652 = root || new pc.UnityMaterial()
  var i2653 = data
  i2652.name = i2653[0]
  request.r(i2653[1], i2653[2], 0, i2652, 'shader')
  i2652.renderQueue = i2653[3]
  i2652.enableInstancing = !!i2653[4]
  var i2655 = i2653[5]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2655[i + 0]) );
  }
  i2652.floatParameters = i2654
  var i2657 = i2653[6]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2657[i + 0]) );
  }
  i2652.colorParameters = i2656
  var i2659 = i2653[7]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2659[i + 0]) );
  }
  i2652.vectorParameters = i2658
  var i2661 = i2653[8]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2661[i + 0]) );
  }
  i2652.textureParameters = i2660
  var i2663 = i2653[9]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2663[i + 0]) );
  }
  i2652.materialFlags = i2662
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2667 = data
  i2666.name = i2667[0]
  i2666.value = i2667[1]
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2671 = data
  i2670.name = i2671[0]
  i2670.value = new pc.Color(i2671[1], i2671[2], i2671[3], i2671[4])
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2675 = data
  i2674.name = i2675[0]
  i2674.value = new pc.Vec4( i2675[1], i2675[2], i2675[3], i2675[4] )
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2679 = data
  i2678.name = i2679[0]
  request.r(i2679[1], i2679[2], 0, i2678, 'value')
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2683 = data
  i2682.name = i2683[0]
  i2682.enabled = !!i2683[1]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2685 = data
  i2684.name = i2685[0]
  i2684.width = i2685[1]
  i2684.height = i2685[2]
  i2684.mipmapCount = i2685[3]
  i2684.anisoLevel = i2685[4]
  i2684.filterMode = i2685[5]
  i2684.hdr = !!i2685[6]
  i2684.format = i2685[7]
  i2684.wrapMode = i2685[8]
  i2684.alphaIsTransparency = !!i2685[9]
  i2684.alphaSource = i2685[10]
  i2684.graphicsFormat = i2685[11]
  i2684.sRGBTexture = !!i2685[12]
  i2684.desiredColorSpace = i2685[13]
  i2684.wrapU = i2685[14]
  i2684.wrapV = i2685[15]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2687 = data
  i2686.name = i2687[0]
  i2686.halfPrecision = !!i2687[1]
  i2686.useUInt32IndexFormat = !!i2687[2]
  i2686.vertexCount = i2687[3]
  i2686.aabb = i2687[4]
  var i2689 = i2687[5]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( !!i2689[i + 0] );
  }
  i2686.streams = i2688
  i2686.vertices = i2687[6]
  var i2691 = i2687[7]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2691[i + 0]) );
  }
  i2686.subMeshes = i2690
  var i2693 = i2687[8]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 16) {
    i2692.push( new pc.Mat4().setData(i2693[i + 0], i2693[i + 1], i2693[i + 2], i2693[i + 3],  i2693[i + 4], i2693[i + 5], i2693[i + 6], i2693[i + 7],  i2693[i + 8], i2693[i + 9], i2693[i + 10], i2693[i + 11],  i2693[i + 12], i2693[i + 13], i2693[i + 14], i2693[i + 15]) );
  }
  i2686.bindposes = i2692
  var i2695 = i2687[9]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2695[i + 0]) );
  }
  i2686.blendShapes = i2694
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2701 = data
  i2700.triangles = i2701[0]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2707 = data
  i2706.name = i2707[0]
  var i2709 = i2707[1]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2709[i + 0]) );
  }
  i2706.frames = i2708
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2711 = data
  i2710.position = new pc.Vec3( i2711[0], i2711[1], i2711[2] )
  i2710.scale = new pc.Vec3( i2711[3], i2711[4], i2711[5] )
  i2710.rotation = new pc.Quat(i2711[6], i2711[7], i2711[8], i2711[9])
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2713 = data
  request.r(i2713[0], i2713[1], 0, i2712, 'sharedMesh')
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2715 = data
  request.r(i2715[0], i2715[1], 0, i2714, 'additionalVertexStreams')
  i2714.enabled = !!i2715[2]
  request.r(i2715[3], i2715[4], 0, i2714, 'sharedMaterial')
  var i2717 = i2715[5]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 2) {
  request.r(i2717[i + 0], i2717[i + 1], 2, i2716, '')
  }
  i2714.sharedMaterials = i2716
  i2714.receiveShadows = !!i2715[6]
  i2714.shadowCastingMode = i2715[7]
  i2714.sortingLayerID = i2715[8]
  i2714.sortingOrder = i2715[9]
  i2714.lightmapIndex = i2715[10]
  i2714.lightmapSceneIndex = i2715[11]
  i2714.lightmapScaleOffset = new pc.Vec4( i2715[12], i2715[13], i2715[14], i2715[15] )
  i2714.lightProbeUsage = i2715[16]
  i2714.reflectionProbeUsage = i2715[17]
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2721 = data
  i2720.name = i2721[0]
  i2720.tagId = i2721[1]
  i2720.enabled = !!i2721[2]
  i2720.isStatic = !!i2721[3]
  i2720.layer = i2721[4]
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2723 = data
  i2722.enabled = !!i2723[0]
  request.r(i2723[1], i2723[2], 0, i2722, 'sharedMaterial')
  var i2725 = i2723[3]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 2) {
  request.r(i2725[i + 0], i2725[i + 1], 2, i2724, '')
  }
  i2722.sharedMaterials = i2724
  i2722.receiveShadows = !!i2723[4]
  i2722.shadowCastingMode = i2723[5]
  i2722.sortingLayerID = i2723[6]
  i2722.sortingOrder = i2723[7]
  i2722.lightmapIndex = i2723[8]
  i2722.lightmapSceneIndex = i2723[9]
  i2722.lightmapScaleOffset = new pc.Vec4( i2723[10], i2723[11], i2723[12], i2723[13] )
  i2722.lightProbeUsage = i2723[14]
  i2722.reflectionProbeUsage = i2723[15]
  request.r(i2723[16], i2723[17], 0, i2722, 'sharedMesh')
  var i2727 = i2723[18]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 2) {
  request.r(i2727[i + 0], i2727[i + 1], 2, i2726, '')
  }
  i2722.bones = i2726
  i2722.updateWhenOffscreen = !!i2723[19]
  i2722.localBounds = i2723[20]
  request.r(i2723[21], i2723[22], 0, i2722, 'rootBone')
  var i2729 = i2723[23]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2729[i + 0]) );
  }
  i2722.blendShapesWeights = i2728
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2735 = data
  i2734.weight = i2735[0]
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2737 = data
  i2736.name = i2737[0]
  i2736.atlasId = i2737[1]
  i2736.mipmapCount = i2737[2]
  i2736.hdr = !!i2737[3]
  i2736.size = i2737[4]
  i2736.anisoLevel = i2737[5]
  i2736.filterMode = i2737[6]
  var i2739 = i2737[7]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 4) {
    i2738.push( UnityEngine.Rect.MinMaxRect(i2739[i + 0], i2739[i + 1], i2739[i + 2], i2739[i + 3]) );
  }
  i2736.rects = i2738
  i2736.wrapU = i2737[8]
  i2736.wrapV = i2737[9]
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2743 = data
  i2742.name = i2743[0]
  i2742.index = i2743[1]
  i2742.startup = !!i2743[2]
  return i2742
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2744 = root || request.c( 'CameraFollow' )
  var i2745 = data
  i2744.tracking = !!i2745[0]
  i2744.EndTarget = new pc.Vec3( i2745[1], i2745[2], i2745[3] )
  request.r(i2745[4], i2745[5], 0, i2744, 'target')
  i2744.smoothSpeed = i2745[6]
  i2744.offset = new pc.Vec3( i2745[7], i2745[8], i2745[9] )
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2747 = data
  i2746.enabled = !!i2747[0]
  i2746.aspect = i2747[1]
  i2746.orthographic = !!i2747[2]
  i2746.orthographicSize = i2747[3]
  i2746.backgroundColor = new pc.Color(i2747[4], i2747[5], i2747[6], i2747[7])
  i2746.nearClipPlane = i2747[8]
  i2746.farClipPlane = i2747[9]
  i2746.fieldOfView = i2747[10]
  i2746.depth = i2747[11]
  i2746.clearFlags = i2747[12]
  i2746.cullingMask = i2747[13]
  i2746.rect = i2747[14]
  request.r(i2747[15], i2747[16], 0, i2746, 'targetTexture')
  i2746.usePhysicalProperties = !!i2747[17]
  i2746.focalLength = i2747[18]
  i2746.sensorSize = new pc.Vec2( i2747[19], i2747[20] )
  i2746.lensShift = new pc.Vec2( i2747[21], i2747[22] )
  i2746.gateFit = i2747[23]
  i2746.commandBufferCount = i2747[24]
  i2746.cameraType = i2747[25]
  return i2746
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i2748 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i2749 = data
  i2748.m_RenderShadows = !!i2749[0]
  i2748.m_RequiresDepthTextureOption = i2749[1]
  i2748.m_RequiresOpaqueTextureOption = i2749[2]
  i2748.m_CameraType = i2749[3]
  var i2751 = i2749[4]
  var i2750 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2751.length; i += 2) {
  request.r(i2751[i + 0], i2751[i + 1], 1, i2750, '')
  }
  i2748.m_Cameras = i2750
  i2748.m_RendererIndex = i2749[5]
  i2748.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2749[6] )
  request.r(i2749[7], i2749[8], 0, i2748, 'm_VolumeTrigger')
  i2748.m_VolumeFrameworkUpdateModeOption = i2749[9]
  i2748.m_RenderPostProcessing = !!i2749[10]
  i2748.m_Antialiasing = i2749[11]
  i2748.m_AntialiasingQuality = i2749[12]
  i2748.m_StopNaN = !!i2749[13]
  i2748.m_Dithering = !!i2749[14]
  i2748.m_ClearDepth = !!i2749[15]
  i2748.m_AllowXRRendering = !!i2749[16]
  i2748.m_AllowHDROutput = !!i2749[17]
  i2748.m_UseScreenCoordOverride = !!i2749[18]
  i2748.m_ScreenSizeOverride = new pc.Vec4( i2749[19], i2749[20], i2749[21], i2749[22] )
  i2748.m_ScreenCoordScaleBias = new pc.Vec4( i2749[23], i2749[24], i2749[25], i2749[26] )
  i2748.m_RequiresDepthTexture = !!i2749[27]
  i2748.m_RequiresColorTexture = !!i2749[28]
  i2748.m_Version = i2749[29]
  i2748.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i2749[30], i2748.m_TaaSettings)
  return i2748
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i2754 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i2755 = data
  i2754.m_Quality = i2755[0]
  i2754.m_FrameInfluence = i2755[1]
  i2754.m_JitterScale = i2755[2]
  i2754.m_MipBias = i2755[3]
  i2754.m_VarianceClampScale = i2755[4]
  i2754.m_ContrastAdaptiveSharpening = i2755[5]
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2757 = data
  request.r(i2757[0], i2757[1], 0, i2756, 'clip')
  request.r(i2757[2], i2757[3], 0, i2756, 'outputAudioMixerGroup')
  i2756.playOnAwake = !!i2757[4]
  i2756.loop = !!i2757[5]
  i2756.time = i2757[6]
  i2756.volume = i2757[7]
  i2756.pitch = i2757[8]
  i2756.enabled = !!i2757[9]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2759 = data
  i2758.enabled = !!i2759[0]
  request.r(i2759[1], i2759[2], 0, i2758, 'sharedMaterial')
  var i2761 = i2759[3]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 2) {
  request.r(i2761[i + 0], i2761[i + 1], 2, i2760, '')
  }
  i2758.sharedMaterials = i2760
  i2758.receiveShadows = !!i2759[4]
  i2758.shadowCastingMode = i2759[5]
  i2758.sortingLayerID = i2759[6]
  i2758.sortingOrder = i2759[7]
  i2758.lightmapIndex = i2759[8]
  i2758.lightmapSceneIndex = i2759[9]
  i2758.lightmapScaleOffset = new pc.Vec4( i2759[10], i2759[11], i2759[12], i2759[13] )
  i2758.lightProbeUsage = i2759[14]
  i2758.reflectionProbeUsage = i2759[15]
  i2758.color = new pc.Color(i2759[16], i2759[17], i2759[18], i2759[19])
  request.r(i2759[20], i2759[21], 0, i2758, 'sprite')
  i2758.flipX = !!i2759[22]
  i2758.flipY = !!i2759[23]
  i2758.drawMode = i2759[24]
  i2758.size = new pc.Vec2( i2759[25], i2759[26] )
  i2758.tileMode = i2759[27]
  i2758.adaptiveModeThreshold = i2759[28]
  i2758.maskInteraction = i2759[29]
  i2758.spriteSortPoint = i2759[30]
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2763 = data
  i2762.enabled = !!i2763[0]
  i2762.type = i2763[1]
  i2762.color = new pc.Color(i2763[2], i2763[3], i2763[4], i2763[5])
  i2762.cullingMask = i2763[6]
  i2762.intensity = i2763[7]
  i2762.range = i2763[8]
  i2762.spotAngle = i2763[9]
  i2762.shadows = i2763[10]
  i2762.shadowNormalBias = i2763[11]
  i2762.shadowBias = i2763[12]
  i2762.shadowStrength = i2763[13]
  i2762.shadowResolution = i2763[14]
  i2762.lightmapBakeType = i2763[15]
  i2762.renderMode = i2763[16]
  request.r(i2763[17], i2763[18], 0, i2762, 'cookie')
  i2762.cookieSize = i2763[19]
  return i2762
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i2764 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i2765 = data
  i2764.m_Version = i2765[0]
  i2764.m_UsePipelineSettings = !!i2765[1]
  i2764.m_AdditionalLightsShadowResolutionTier = i2765[2]
  i2764.m_LightLayerMask = i2765[3]
  i2764.m_RenderingLayers = i2765[4]
  i2764.m_CustomShadowLayers = !!i2765[5]
  i2764.m_ShadowLayerMask = i2765[6]
  i2764.m_ShadowRenderingLayers = i2765[7]
  i2764.m_LightCookieSize = new pc.Vec2( i2765[8], i2765[9] )
  i2764.m_LightCookieOffset = new pc.Vec2( i2765[10], i2765[11] )
  i2764.m_SoftShadowQuality = i2765[12]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2767 = data
  i2766.mass = i2767[0]
  i2766.drag = i2767[1]
  i2766.angularDrag = i2767[2]
  i2766.useGravity = !!i2767[3]
  i2766.isKinematic = !!i2767[4]
  i2766.constraints = i2767[5]
  i2766.maxAngularVelocity = i2767[6]
  i2766.collisionDetectionMode = i2767[7]
  i2766.interpolation = i2767[8]
  return i2766
}

Deserializers["Player"] = function (request, data, root) {
  var i2768 = root || request.c( 'Player' )
  var i2769 = data
  i2768.controllSound = !!i2769[0]
  request.r(i2769[1], i2769[2], 0, i2768, 'powerSlider')
  i2768.power = i2769[3]
  request.r(i2769[4], i2769[5], 0, i2768, 'rb')
  i2768.speed = i2769[6]
  i2768.maxSpeed = i2769[7]
  var i2771 = i2769[8]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 2) {
  request.r(i2771[i + 0], i2771[i + 1], 2, i2770, '')
  }
  i2768.wheels = i2770
  request.r(i2769[9], i2769[10], 0, i2768, 'propeller')
  request.r(i2769[11], i2769[12], 0, i2768, 'windParticleSystem')
  request.r(i2769[13], i2769[14], 0, i2768, 'propellerAudio')
  return i2768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2773 = data
  i2772.center = new pc.Vec3( i2773[0], i2773[1], i2773[2] )
  i2772.radius = i2773[3]
  i2772.height = i2773[4]
  i2772.direction = i2773[5]
  i2772.enabled = !!i2773[6]
  i2772.isTrigger = !!i2773[7]
  request.r(i2773[8], i2773[9], 0, i2772, 'material')
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2775 = data
  i2774.center = new pc.Vec3( i2775[0], i2775[1], i2775[2] )
  i2774.size = new pc.Vec3( i2775[3], i2775[4], i2775[5] )
  i2774.enabled = !!i2775[6]
  i2774.isTrigger = !!i2775[7]
  request.r(i2775[8], i2775[9], 0, i2774, 'material')
  return i2774
}

Deserializers["SimpleOutline"] = function (request, data, root) {
  var i2776 = root || request.c( 'SimpleOutline' )
  var i2777 = data
  i2776.outlineColor = new pc.Color(i2777[0], i2777[1], i2777[2], i2777[3])
  i2776.scaleFactor = i2777[4]
  request.r(i2777[5], i2777[6], 0, i2776, 'outlineMaterial')
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2779 = data
  i2778.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2779[0], i2778.main)
  i2778.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2779[1], i2778.colorBySpeed)
  i2778.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2779[2], i2778.colorOverLifetime)
  i2778.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2779[3], i2778.emission)
  i2778.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2779[4], i2778.rotationBySpeed)
  i2778.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2779[5], i2778.rotationOverLifetime)
  i2778.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2779[6], i2778.shape)
  i2778.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2779[7], i2778.sizeBySpeed)
  i2778.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2779[8], i2778.sizeOverLifetime)
  i2778.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2779[9], i2778.textureSheetAnimation)
  i2778.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2779[10], i2778.velocityOverLifetime)
  i2778.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2779[11], i2778.noise)
  i2778.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2779[12], i2778.inheritVelocity)
  i2778.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2779[13], i2778.forceOverLifetime)
  i2778.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2779[14], i2778.limitVelocityOverLifetime)
  i2778.useAutoRandomSeed = !!i2779[15]
  i2778.randomSeed = i2779[16]
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2780 = root || new pc.ParticleSystemMain()
  var i2781 = data
  i2780.duration = i2781[0]
  i2780.loop = !!i2781[1]
  i2780.prewarm = !!i2781[2]
  i2780.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2781[3], i2780.startDelay)
  i2780.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2781[4], i2780.startLifetime)
  i2780.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2781[5], i2780.startSpeed)
  i2780.startSize3D = !!i2781[6]
  i2780.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2781[7], i2780.startSizeX)
  i2780.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2781[8], i2780.startSizeY)
  i2780.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2781[9], i2780.startSizeZ)
  i2780.startRotation3D = !!i2781[10]
  i2780.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2781[11], i2780.startRotationX)
  i2780.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2781[12], i2780.startRotationY)
  i2780.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2781[13], i2780.startRotationZ)
  i2780.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2781[14], i2780.startColor)
  i2780.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2781[15], i2780.gravityModifier)
  i2780.simulationSpace = i2781[16]
  request.r(i2781[17], i2781[18], 0, i2780, 'customSimulationSpace')
  i2780.simulationSpeed = i2781[19]
  i2780.useUnscaledTime = !!i2781[20]
  i2780.scalingMode = i2781[21]
  i2780.playOnAwake = !!i2781[22]
  i2780.maxParticles = i2781[23]
  i2780.emitterVelocityMode = i2781[24]
  i2780.stopAction = i2781[25]
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2782 = root || new pc.MinMaxCurve()
  var i2783 = data
  i2782.mode = i2783[0]
  i2782.curveMin = new pc.AnimationCurve( { keys_flow: i2783[1] } )
  i2782.curveMax = new pc.AnimationCurve( { keys_flow: i2783[2] } )
  i2782.curveMultiplier = i2783[3]
  i2782.constantMin = i2783[4]
  i2782.constantMax = i2783[5]
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2784 = root || new pc.MinMaxGradient()
  var i2785 = data
  i2784.mode = i2785[0]
  i2784.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2785[1], i2784.gradientMin)
  i2784.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2785[2], i2784.gradientMax)
  i2784.colorMin = new pc.Color(i2785[3], i2785[4], i2785[5], i2785[6])
  i2784.colorMax = new pc.Color(i2785[7], i2785[8], i2785[9], i2785[10])
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2787 = data
  i2786.mode = i2787[0]
  var i2789 = i2787[1]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2789[i + 0]) );
  }
  i2786.colorKeys = i2788
  var i2791 = i2787[2]
  var i2790 = []
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2791[i + 0]) );
  }
  i2786.alphaKeys = i2790
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2792 = root || new pc.ParticleSystemColorBySpeed()
  var i2793 = data
  i2792.enabled = !!i2793[0]
  i2792.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2793[1], i2792.color)
  i2792.range = new pc.Vec2( i2793[2], i2793[3] )
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2797 = data
  i2796.color = new pc.Color(i2797[0], i2797[1], i2797[2], i2797[3])
  i2796.time = i2797[4]
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2801 = data
  i2800.alpha = i2801[0]
  i2800.time = i2801[1]
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2802 = root || new pc.ParticleSystemColorOverLifetime()
  var i2803 = data
  i2802.enabled = !!i2803[0]
  i2802.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2803[1], i2802.color)
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2804 = root || new pc.ParticleSystemEmitter()
  var i2805 = data
  i2804.enabled = !!i2805[0]
  i2804.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2805[1], i2804.rateOverTime)
  i2804.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2805[2], i2804.rateOverDistance)
  var i2807 = i2805[3]
  var i2806 = []
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2807[i + 0]) );
  }
  i2804.bursts = i2806
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2810 = root || new pc.ParticleSystemBurst()
  var i2811 = data
  i2810.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2811[0], i2810.count)
  i2810.cycleCount = i2811[1]
  i2810.minCount = i2811[2]
  i2810.maxCount = i2811[3]
  i2810.repeatInterval = i2811[4]
  i2810.time = i2811[5]
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2812 = root || new pc.ParticleSystemRotationBySpeed()
  var i2813 = data
  i2812.enabled = !!i2813[0]
  i2812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2813[1], i2812.x)
  i2812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2813[2], i2812.y)
  i2812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2813[3], i2812.z)
  i2812.separateAxes = !!i2813[4]
  i2812.range = new pc.Vec2( i2813[5], i2813[6] )
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2814 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2815 = data
  i2814.enabled = !!i2815[0]
  i2814.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2815[1], i2814.x)
  i2814.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2815[2], i2814.y)
  i2814.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2815[3], i2814.z)
  i2814.separateAxes = !!i2815[4]
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2816 = root || new pc.ParticleSystemShape()
  var i2817 = data
  i2816.enabled = !!i2817[0]
  i2816.shapeType = i2817[1]
  i2816.randomDirectionAmount = i2817[2]
  i2816.sphericalDirectionAmount = i2817[3]
  i2816.randomPositionAmount = i2817[4]
  i2816.alignToDirection = !!i2817[5]
  i2816.radius = i2817[6]
  i2816.radiusMode = i2817[7]
  i2816.radiusSpread = i2817[8]
  i2816.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2817[9], i2816.radiusSpeed)
  i2816.radiusThickness = i2817[10]
  i2816.angle = i2817[11]
  i2816.length = i2817[12]
  i2816.boxThickness = new pc.Vec3( i2817[13], i2817[14], i2817[15] )
  i2816.meshShapeType = i2817[16]
  request.r(i2817[17], i2817[18], 0, i2816, 'mesh')
  request.r(i2817[19], i2817[20], 0, i2816, 'meshRenderer')
  request.r(i2817[21], i2817[22], 0, i2816, 'skinnedMeshRenderer')
  i2816.useMeshMaterialIndex = !!i2817[23]
  i2816.meshMaterialIndex = i2817[24]
  i2816.useMeshColors = !!i2817[25]
  i2816.normalOffset = i2817[26]
  i2816.arc = i2817[27]
  i2816.arcMode = i2817[28]
  i2816.arcSpread = i2817[29]
  i2816.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2817[30], i2816.arcSpeed)
  i2816.donutRadius = i2817[31]
  i2816.position = new pc.Vec3( i2817[32], i2817[33], i2817[34] )
  i2816.rotation = new pc.Vec3( i2817[35], i2817[36], i2817[37] )
  i2816.scale = new pc.Vec3( i2817[38], i2817[39], i2817[40] )
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2818 = root || new pc.ParticleSystemSizeBySpeed()
  var i2819 = data
  i2818.enabled = !!i2819[0]
  i2818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2819[1], i2818.x)
  i2818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2819[2], i2818.y)
  i2818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2819[3], i2818.z)
  i2818.separateAxes = !!i2819[4]
  i2818.range = new pc.Vec2( i2819[5], i2819[6] )
  return i2818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2820 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2821 = data
  i2820.enabled = !!i2821[0]
  i2820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2821[1], i2820.x)
  i2820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2821[2], i2820.y)
  i2820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2821[3], i2820.z)
  i2820.separateAxes = !!i2821[4]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2822 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2823 = data
  i2822.enabled = !!i2823[0]
  i2822.mode = i2823[1]
  i2822.animation = i2823[2]
  i2822.numTilesX = i2823[3]
  i2822.numTilesY = i2823[4]
  i2822.useRandomRow = !!i2823[5]
  i2822.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2823[6], i2822.frameOverTime)
  i2822.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2823[7], i2822.startFrame)
  i2822.cycleCount = i2823[8]
  i2822.rowIndex = i2823[9]
  i2822.flipU = i2823[10]
  i2822.flipV = i2823[11]
  i2822.spriteCount = i2823[12]
  var i2825 = i2823[13]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 2) {
  request.r(i2825[i + 0], i2825[i + 1], 2, i2824, '')
  }
  i2822.sprites = i2824
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2828 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2829 = data
  i2828.enabled = !!i2829[0]
  i2828.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[1], i2828.x)
  i2828.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[2], i2828.y)
  i2828.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[3], i2828.z)
  i2828.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[4], i2828.radial)
  i2828.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[5], i2828.speedModifier)
  i2828.space = i2829[6]
  i2828.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[7], i2828.orbitalX)
  i2828.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[8], i2828.orbitalY)
  i2828.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[9], i2828.orbitalZ)
  i2828.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[10], i2828.orbitalOffsetX)
  i2828.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[11], i2828.orbitalOffsetY)
  i2828.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2829[12], i2828.orbitalOffsetZ)
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2830 = root || new pc.ParticleSystemNoise()
  var i2831 = data
  i2830.enabled = !!i2831[0]
  i2830.separateAxes = !!i2831[1]
  i2830.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2831[2], i2830.strengthX)
  i2830.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2831[3], i2830.strengthY)
  i2830.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2831[4], i2830.strengthZ)
  i2830.frequency = i2831[5]
  i2830.damping = !!i2831[6]
  i2830.octaveCount = i2831[7]
  i2830.octaveMultiplier = i2831[8]
  i2830.octaveScale = i2831[9]
  i2830.quality = i2831[10]
  i2830.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2831[11], i2830.scrollSpeed)
  i2830.scrollSpeedMultiplier = i2831[12]
  i2830.remapEnabled = !!i2831[13]
  i2830.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2831[14], i2830.remapX)
  i2830.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2831[15], i2830.remapY)
  i2830.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2831[16], i2830.remapZ)
  i2830.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2831[17], i2830.positionAmount)
  i2830.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2831[18], i2830.rotationAmount)
  i2830.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2831[19], i2830.sizeAmount)
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2832 = root || new pc.ParticleSystemInheritVelocity()
  var i2833 = data
  i2832.enabled = !!i2833[0]
  i2832.mode = i2833[1]
  i2832.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2833[2], i2832.curve)
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2834 = root || new pc.ParticleSystemForceOverLifetime()
  var i2835 = data
  i2834.enabled = !!i2835[0]
  i2834.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2835[1], i2834.x)
  i2834.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2835[2], i2834.y)
  i2834.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2835[3], i2834.z)
  i2834.space = i2835[4]
  i2834.randomized = !!i2835[5]
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2836 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2837 = data
  i2836.enabled = !!i2837[0]
  i2836.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[1], i2836.limit)
  i2836.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[2], i2836.limitX)
  i2836.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[3], i2836.limitY)
  i2836.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[4], i2836.limitZ)
  i2836.dampen = i2837[5]
  i2836.separateAxes = !!i2837[6]
  i2836.space = i2837[7]
  i2836.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2837[8], i2836.drag)
  i2836.multiplyDragByParticleSize = !!i2837[9]
  i2836.multiplyDragByParticleVelocity = !!i2837[10]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2839 = data
  i2838.enabled = !!i2839[0]
  request.r(i2839[1], i2839[2], 0, i2838, 'sharedMaterial')
  var i2841 = i2839[3]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 2) {
  request.r(i2841[i + 0], i2841[i + 1], 2, i2840, '')
  }
  i2838.sharedMaterials = i2840
  i2838.receiveShadows = !!i2839[4]
  i2838.shadowCastingMode = i2839[5]
  i2838.sortingLayerID = i2839[6]
  i2838.sortingOrder = i2839[7]
  i2838.lightmapIndex = i2839[8]
  i2838.lightmapSceneIndex = i2839[9]
  i2838.lightmapScaleOffset = new pc.Vec4( i2839[10], i2839[11], i2839[12], i2839[13] )
  i2838.lightProbeUsage = i2839[14]
  i2838.reflectionProbeUsage = i2839[15]
  request.r(i2839[16], i2839[17], 0, i2838, 'mesh')
  i2838.meshCount = i2839[18]
  i2838.activeVertexStreamsCount = i2839[19]
  i2838.alignment = i2839[20]
  i2838.renderMode = i2839[21]
  i2838.sortMode = i2839[22]
  i2838.lengthScale = i2839[23]
  i2838.velocityScale = i2839[24]
  i2838.cameraVelocityScale = i2839[25]
  i2838.normalDirection = i2839[26]
  i2838.sortingFudge = i2839[27]
  i2838.minParticleSize = i2839[28]
  i2838.maxParticleSize = i2839[29]
  i2838.pivot = new pc.Vec3( i2839[30], i2839[31], i2839[32] )
  request.r(i2839[33], i2839[34], 0, i2838, 'trailMaterial')
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2843 = data
  i2842.pivot = new pc.Vec2( i2843[0], i2843[1] )
  i2842.anchorMin = new pc.Vec2( i2843[2], i2843[3] )
  i2842.anchorMax = new pc.Vec2( i2843[4], i2843[5] )
  i2842.sizeDelta = new pc.Vec2( i2843[6], i2843[7] )
  i2842.anchoredPosition3D = new pc.Vec3( i2843[8], i2843[9], i2843[10] )
  i2842.rotation = new pc.Quat(i2843[11], i2843[12], i2843[13], i2843[14])
  i2842.scale = new pc.Vec3( i2843[15], i2843[16], i2843[17] )
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2845 = data
  i2844.enabled = !!i2845[0]
  i2844.planeDistance = i2845[1]
  i2844.referencePixelsPerUnit = i2845[2]
  i2844.isFallbackOverlay = !!i2845[3]
  i2844.renderMode = i2845[4]
  i2844.renderOrder = i2845[5]
  i2844.sortingLayerName = i2845[6]
  i2844.sortingOrder = i2845[7]
  i2844.scaleFactor = i2845[8]
  request.r(i2845[9], i2845[10], 0, i2844, 'worldCamera')
  i2844.overrideSorting = !!i2845[11]
  i2844.pixelPerfect = !!i2845[12]
  i2844.targetDisplay = i2845[13]
  i2844.overridePixelPerfect = !!i2845[14]
  return i2844
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2846 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2847 = data
  i2846.m_UiScaleMode = i2847[0]
  i2846.m_ReferencePixelsPerUnit = i2847[1]
  i2846.m_ScaleFactor = i2847[2]
  i2846.m_ReferenceResolution = new pc.Vec2( i2847[3], i2847[4] )
  i2846.m_ScreenMatchMode = i2847[5]
  i2846.m_MatchWidthOrHeight = i2847[6]
  i2846.m_PhysicalUnit = i2847[7]
  i2846.m_FallbackScreenDPI = i2847[8]
  i2846.m_DefaultSpriteDPI = i2847[9]
  i2846.m_DynamicPixelsPerUnit = i2847[10]
  i2846.m_PresetInfoIsWorld = !!i2847[11]
  return i2846
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2848 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2849 = data
  i2848.m_IgnoreReversedGraphics = !!i2849[0]
  i2848.m_BlockingObjects = i2849[1]
  i2848.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2849[2] )
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2851 = data
  i2850.cullTransparentMesh = !!i2851[0]
  return i2850
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2852 = root || request.c( 'UnityEngine.UI.Image' )
  var i2853 = data
  request.r(i2853[0], i2853[1], 0, i2852, 'm_Sprite')
  i2852.m_Type = i2853[2]
  i2852.m_PreserveAspect = !!i2853[3]
  i2852.m_FillCenter = !!i2853[4]
  i2852.m_FillMethod = i2853[5]
  i2852.m_FillAmount = i2853[6]
  i2852.m_FillClockwise = !!i2853[7]
  i2852.m_FillOrigin = i2853[8]
  i2852.m_UseSpriteMesh = !!i2853[9]
  i2852.m_PixelsPerUnitMultiplier = i2853[10]
  request.r(i2853[11], i2853[12], 0, i2852, 'm_Material')
  i2852.m_Maskable = !!i2853[13]
  i2852.m_Color = new pc.Color(i2853[14], i2853[15], i2853[16], i2853[17])
  i2852.m_RaycastTarget = !!i2853[18]
  i2852.m_RaycastPadding = new pc.Vec4( i2853[19], i2853[20], i2853[21], i2853[22] )
  return i2852
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2854 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2855 = data
  request.r(i2855[0], i2855[1], 0, i2854, 'm_FillRect')
  request.r(i2855[2], i2855[3], 0, i2854, 'm_HandleRect')
  i2854.m_Direction = i2855[4]
  i2854.m_MinValue = i2855[5]
  i2854.m_MaxValue = i2855[6]
  i2854.m_WholeNumbers = !!i2855[7]
  i2854.m_Value = i2855[8]
  i2854.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2855[9], i2854.m_OnValueChanged)
  i2854.m_Navigation = request.d('UnityEngine.UI.Navigation', i2855[10], i2854.m_Navigation)
  i2854.m_Transition = i2855[11]
  i2854.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2855[12], i2854.m_Colors)
  i2854.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2855[13], i2854.m_SpriteState)
  i2854.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2855[14], i2854.m_AnimationTriggers)
  i2854.m_Interactable = !!i2855[15]
  request.r(i2855[16], i2855[17], 0, i2854, 'm_TargetGraphic')
  return i2854
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2856 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2857 = data
  i2856.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2857[0], i2856.m_PersistentCalls)
  return i2856
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2858 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2859 = data
  var i2861 = i2859[0]
  var i2860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.add(request.d('UnityEngine.Events.PersistentCall', i2861[i + 0]));
  }
  i2858.m_Calls = i2860
  return i2858
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2864 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2865 = data
  request.r(i2865[0], i2865[1], 0, i2864, 'm_Target')
  i2864.m_TargetAssemblyTypeName = i2865[2]
  i2864.m_MethodName = i2865[3]
  i2864.m_Mode = i2865[4]
  i2864.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2865[5], i2864.m_Arguments)
  i2864.m_CallState = i2865[6]
  return i2864
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2866 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2867 = data
  i2866.m_Mode = i2867[0]
  i2866.m_WrapAround = !!i2867[1]
  request.r(i2867[2], i2867[3], 0, i2866, 'm_SelectOnUp')
  request.r(i2867[4], i2867[5], 0, i2866, 'm_SelectOnDown')
  request.r(i2867[6], i2867[7], 0, i2866, 'm_SelectOnLeft')
  request.r(i2867[8], i2867[9], 0, i2866, 'm_SelectOnRight')
  return i2866
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2868 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2869 = data
  i2868.m_NormalColor = new pc.Color(i2869[0], i2869[1], i2869[2], i2869[3])
  i2868.m_HighlightedColor = new pc.Color(i2869[4], i2869[5], i2869[6], i2869[7])
  i2868.m_PressedColor = new pc.Color(i2869[8], i2869[9], i2869[10], i2869[11])
  i2868.m_SelectedColor = new pc.Color(i2869[12], i2869[13], i2869[14], i2869[15])
  i2868.m_DisabledColor = new pc.Color(i2869[16], i2869[17], i2869[18], i2869[19])
  i2868.m_ColorMultiplier = i2869[20]
  i2868.m_FadeDuration = i2869[21]
  return i2868
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2870 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2871 = data
  request.r(i2871[0], i2871[1], 0, i2870, 'm_HighlightedSprite')
  request.r(i2871[2], i2871[3], 0, i2870, 'm_PressedSprite')
  request.r(i2871[4], i2871[5], 0, i2870, 'm_SelectedSprite')
  request.r(i2871[6], i2871[7], 0, i2870, 'm_DisabledSprite')
  return i2870
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2872 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2873 = data
  i2872.m_NormalTrigger = i2873[0]
  i2872.m_HighlightedTrigger = i2873[1]
  i2872.m_PressedTrigger = i2873[2]
  i2872.m_SelectedTrigger = i2873[3]
  i2872.m_DisabledTrigger = i2873[4]
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2875 = data
  request.r(i2875[0], i2875[1], 0, i2874, 'animatorController')
  request.r(i2875[2], i2875[3], 0, i2874, 'avatar')
  i2874.updateMode = i2875[4]
  i2874.hasTransformHierarchy = !!i2875[5]
  i2874.applyRootMotion = !!i2875[6]
  var i2877 = i2875[7]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 2) {
  request.r(i2877[i + 0], i2877[i + 1], 2, i2876, '')
  }
  i2874.humanBones = i2876
  i2874.enabled = !!i2875[8]
  return i2874
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2878 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2879 = data
  request.r(i2879[0], i2879[1], 0, i2878, 'm_ObjectArgument')
  i2878.m_ObjectArgumentAssemblyTypeName = i2879[2]
  i2878.m_IntArgument = i2879[3]
  i2878.m_FloatArgument = i2879[4]
  i2878.m_StringArgument = i2879[5]
  i2878.m_BoolArgument = !!i2879[6]
  return i2878
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2880 = root || request.c( 'UnityEngine.UI.Button' )
  var i2881 = data
  i2880.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2881[0], i2880.m_OnClick)
  i2880.m_Navigation = request.d('UnityEngine.UI.Navigation', i2881[1], i2880.m_Navigation)
  i2880.m_Transition = i2881[2]
  i2880.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2881[3], i2880.m_Colors)
  i2880.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2881[4], i2880.m_SpriteState)
  i2880.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2881[5], i2880.m_AnimationTriggers)
  i2880.m_Interactable = !!i2881[6]
  request.r(i2881[7], i2881[8], 0, i2880, 'm_TargetGraphic')
  return i2880
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2882 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2883 = data
  i2882.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2883[0], i2882.m_PersistentCalls)
  return i2882
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2884 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2885 = data
  request.r(i2885[0], i2885[1], 0, i2884, 'm_FirstSelected')
  i2884.m_sendNavigationEvents = !!i2885[2]
  i2884.m_DragThreshold = i2885[3]
  return i2884
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2886 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2887 = data
  i2886.m_HorizontalAxis = i2887[0]
  i2886.m_VerticalAxis = i2887[1]
  i2886.m_SubmitButton = i2887[2]
  i2886.m_CancelButton = i2887[3]
  i2886.m_InputActionsPerSecond = i2887[4]
  i2886.m_RepeatDelay = i2887[5]
  i2886.m_ForceModuleActive = !!i2887[6]
  i2886.m_SendPointerHoverToParent = !!i2887[7]
  return i2886
}

Deserializers["GM"] = function (request, data, root) {
  var i2888 = root || request.c( 'GM' )
  var i2889 = data
  i2888.EndGame = !!i2889[0]
  request.r(i2889[1], i2889[2], 0, i2888, 'cameraFollow')
  var i2891 = i2889[3]
  var i2890 = []
  for(var i = 0; i < i2891.length; i += 2) {
  request.r(i2891[i + 0], i2891[i + 1], 2, i2890, '')
  }
  i2888.objectsOfPlayer = i2890
  request.r(i2889[4], i2889[5], 0, i2888, 'Player')
  request.r(i2889[6], i2889[7], 0, i2888, 'TutorialSlider')
  var i2893 = i2889[8]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 2) {
  request.r(i2893[i + 0], i2893[i + 1], 2, i2892, '')
  }
  i2888.RegSlider = i2892
  var i2895 = i2889[9]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 2) {
  request.r(i2895[i + 0], i2895[i + 1], 2, i2894, '')
  }
  i2888.HiddingImages = i2894
  request.r(i2889[10], i2889[11], 0, i2888, 'Fader')
  request.r(i2889[12], i2889[13], 0, i2888, 'Fail')
  request.r(i2889[14], i2889[15], 0, i2888, 'CTA')
  request.r(i2889[16], i2889[17], 0, i2888, 'audioSource')
  request.r(i2889[18], i2889[19], 0, i2888, 'propellerAudio')
  request.r(i2889[20], i2889[21], 0, i2888, 'failSound')
  request.r(i2889[22], i2889[23], 0, i2888, 'brakeSound')
  request.r(i2889[24], i2889[25], 0, i2888, 'mainCamera')
  i2888.camSizeVer = i2889[26]
  i2888.camSizeHor = i2889[27]
  return i2888
}

Deserializers["EndTrigger"] = function (request, data, root) {
  var i2900 = root || request.c( 'EndTrigger' )
  var i2901 = data
  request.r(i2901[0], i2901[1], 0, i2900, 'gm')
  return i2900
}

Deserializers["EndForce"] = function (request, data, root) {
  var i2902 = root || request.c( 'EndForce' )
  var i2903 = data
  i2902.force = i2903[0]
  return i2902
}

Deserializers["RoadBlock"] = function (request, data, root) {
  var i2904 = root || request.c( 'RoadBlock' )
  var i2905 = data
  i2904.waitingTime = i2905[0]
  i2904.fallTime = i2905[1]
  request.r(i2905[2], i2905[3], 0, i2904, 'audioSource')
  request.r(i2905[4], i2905[5], 0, i2904, 'breakSound')
  return i2904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2907 = data
  i2906.ambientIntensity = i2907[0]
  i2906.reflectionIntensity = i2907[1]
  i2906.ambientMode = i2907[2]
  i2906.ambientLight = new pc.Color(i2907[3], i2907[4], i2907[5], i2907[6])
  i2906.ambientSkyColor = new pc.Color(i2907[7], i2907[8], i2907[9], i2907[10])
  i2906.ambientGroundColor = new pc.Color(i2907[11], i2907[12], i2907[13], i2907[14])
  i2906.ambientEquatorColor = new pc.Color(i2907[15], i2907[16], i2907[17], i2907[18])
  i2906.fogColor = new pc.Color(i2907[19], i2907[20], i2907[21], i2907[22])
  i2906.fogEndDistance = i2907[23]
  i2906.fogStartDistance = i2907[24]
  i2906.fogDensity = i2907[25]
  i2906.fog = !!i2907[26]
  request.r(i2907[27], i2907[28], 0, i2906, 'skybox')
  i2906.fogMode = i2907[29]
  var i2909 = i2907[30]
  var i2908 = []
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2909[i + 0]) );
  }
  i2906.lightmaps = i2908
  i2906.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2907[31], i2906.lightProbes)
  i2906.lightmapsMode = i2907[32]
  i2906.mixedBakeMode = i2907[33]
  i2906.environmentLightingMode = i2907[34]
  i2906.ambientProbe = new pc.SphericalHarmonicsL2(i2907[35])
  i2906.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2907[36])
  i2906.useReferenceAmbientProbe = !!i2907[37]
  request.r(i2907[38], i2907[39], 0, i2906, 'customReflection')
  request.r(i2907[40], i2907[41], 0, i2906, 'defaultReflection')
  i2906.defaultReflectionMode = i2907[42]
  i2906.defaultReflectionResolution = i2907[43]
  i2906.sunLightObjectId = i2907[44]
  i2906.pixelLightCount = i2907[45]
  i2906.defaultReflectionHDR = !!i2907[46]
  i2906.hasLightDataAsset = !!i2907[47]
  i2906.hasManualGenerate = !!i2907[48]
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2913 = data
  request.r(i2913[0], i2913[1], 0, i2912, 'lightmapColor')
  request.r(i2913[2], i2913[3], 0, i2912, 'lightmapDirection')
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2914 = root || new UnityEngine.LightProbes()
  var i2915 = data
  return i2914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2923 = data
  i2922.AdditionalLightsPerObjectLimit = i2923[0]
  i2922.AdditionalLightsRenderingMode = i2923[1]
  i2922.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2923[2], i2922.LightRenderingMode)
  i2922.ColorGradingLutSize = i2923[3]
  i2922.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i2923[4], i2922.ColorGradingMode)
  i2922.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2923[5], i2922.MainLightRenderingMode)
  i2922.MainLightRenderingModeValue = i2923[6]
  i2922.SupportsMainLightShadows = !!i2923[7]
  i2922.MixedLightingSupported = !!i2923[8]
  i2922.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i2923[9], i2922.MsaaQuality)
  i2922.MSAA = i2923[10]
  i2922.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i2923[11], i2922.OpaqueDownsampling)
  i2922.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i2923[12], i2922.MainLightShadowmapResolution)
  i2922.MainLightShadowmapResolutionValue = i2923[13]
  i2922.SupportsSoftShadows = !!i2923[14]
  i2922.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i2923[15], i2922.SoftShadowQuality)
  i2922.SoftShadowQualityValue = i2923[16]
  i2922.ShadowDistance = i2923[17]
  i2922.ShadowCascadeCount = i2923[18]
  i2922.Cascade2Split = i2923[19]
  i2922.Cascade3Split = new pc.Vec2( i2923[20], i2923[21] )
  i2922.Cascade4Split = new pc.Vec3( i2923[22], i2923[23], i2923[24] )
  i2922.CascadeBorder = i2923[25]
  i2922.ShadowDepthBias = i2923[26]
  i2922.ShadowNormalBias = i2923[27]
  i2922.RenderScale = i2923[28]
  i2922.RequireDepthTexture = !!i2923[29]
  i2922.RequireOpaqueTexture = !!i2923[30]
  i2922.SupportsHDR = !!i2923[31]
  i2922.SupportsTerrainHoles = !!i2923[32]
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2925 = data
  i2924.Disabled = i2925[0]
  i2924.PerVertex = i2925[1]
  i2924.PerPixel = i2925[2]
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i2927 = data
  i2926.LowDynamicRange = i2927[0]
  i2926.HighDynamicRange = i2927[1]
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i2929 = data
  i2928.Disabled = i2929[0]
  i2928._2x = i2929[1]
  i2928._4x = i2929[2]
  i2928._8x = i2929[3]
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i2930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i2931 = data
  i2930.None = i2931[0]
  i2930._2xBilinear = i2931[1]
  i2930._4xBox = i2931[2]
  i2930._4xBilinear = i2931[3]
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i2932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i2933 = data
  i2932._256 = i2933[0]
  i2932._512 = i2933[1]
  i2932._1024 = i2933[2]
  i2932._2048 = i2933[3]
  i2932._4096 = i2933[4]
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i2934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i2935 = data
  i2934.UsePipelineSettings = i2935[0]
  i2934.Low = i2935[1]
  i2934.Medium = i2935[2]
  i2934.High = i2935[3]
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i2936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i2937 = data
  i2936.name = i2937[0]
  i2936.bounciness = i2937[1]
  i2936.dynamicFriction = i2937[2]
  i2936.staticFriction = i2937[3]
  i2936.frictionCombine = i2937[4]
  i2936.bounceCombine = i2937[5]
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2939 = data
  var i2941 = i2939[0]
  var i2940 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2941[i + 0]));
  }
  i2938.ShaderCompilationErrors = i2940
  i2938.name = i2939[1]
  i2938.guid = i2939[2]
  var i2943 = i2939[3]
  var i2942 = []
  for(var i = 0; i < i2943.length; i += 1) {
    i2942.push( i2943[i + 0] );
  }
  i2938.shaderDefinedKeywords = i2942
  var i2945 = i2939[4]
  var i2944 = []
  for(var i = 0; i < i2945.length; i += 1) {
    i2944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2945[i + 0]) );
  }
  i2938.passes = i2944
  var i2947 = i2939[5]
  var i2946 = []
  for(var i = 0; i < i2947.length; i += 1) {
    i2946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2947[i + 0]) );
  }
  i2938.usePasses = i2946
  var i2949 = i2939[6]
  var i2948 = []
  for(var i = 0; i < i2949.length; i += 1) {
    i2948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2949[i + 0]) );
  }
  i2938.defaultParameterValues = i2948
  request.r(i2939[7], i2939[8], 0, i2938, 'unityFallbackShader')
  i2938.readDepth = !!i2939[9]
  i2938.isCreatedByShaderGraph = !!i2939[10]
  i2938.compiled = !!i2939[11]
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2953 = data
  i2952.shaderName = i2953[0]
  i2952.errorMessage = i2953[1]
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2958 = root || new pc.UnityShaderPass()
  var i2959 = data
  i2958.id = i2959[0]
  i2958.subShaderIndex = i2959[1]
  i2958.name = i2959[2]
  i2958.passType = i2959[3]
  i2958.grabPassTextureName = i2959[4]
  i2958.usePass = !!i2959[5]
  i2958.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2959[6], i2958.zTest)
  i2958.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2959[7], i2958.zWrite)
  i2958.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2959[8], i2958.culling)
  i2958.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2959[9], i2958.blending)
  i2958.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2959[10], i2958.alphaBlending)
  i2958.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2959[11], i2958.colorWriteMask)
  i2958.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2959[12], i2958.offsetUnits)
  i2958.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2959[13], i2958.offsetFactor)
  i2958.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2959[14], i2958.stencilRef)
  i2958.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2959[15], i2958.stencilReadMask)
  i2958.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2959[16], i2958.stencilWriteMask)
  i2958.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2959[17], i2958.stencilOp)
  i2958.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2959[18], i2958.stencilOpFront)
  i2958.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2959[19], i2958.stencilOpBack)
  var i2961 = i2959[20]
  var i2960 = []
  for(var i = 0; i < i2961.length; i += 1) {
    i2960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2961[i + 0]) );
  }
  i2958.tags = i2960
  var i2963 = i2959[21]
  var i2962 = []
  for(var i = 0; i < i2963.length; i += 1) {
    i2962.push( i2963[i + 0] );
  }
  i2958.passDefinedKeywords = i2962
  var i2965 = i2959[22]
  var i2964 = []
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2965[i + 0]) );
  }
  i2958.passDefinedKeywordGroups = i2964
  var i2967 = i2959[23]
  var i2966 = []
  for(var i = 0; i < i2967.length; i += 1) {
    i2966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2967[i + 0]) );
  }
  i2958.variants = i2966
  var i2969 = i2959[24]
  var i2968 = []
  for(var i = 0; i < i2969.length; i += 1) {
    i2968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2969[i + 0]) );
  }
  i2958.excludedVariants = i2968
  i2958.hasDepthReader = !!i2959[25]
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2971 = data
  i2970.val = i2971[0]
  i2970.name = i2971[1]
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2973 = data
  i2972.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2973[0], i2972.src)
  i2972.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2973[1], i2972.dst)
  i2972.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2973[2], i2972.op)
  return i2972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2975 = data
  i2974.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2975[0], i2974.pass)
  i2974.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2975[1], i2974.fail)
  i2974.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2975[2], i2974.zFail)
  i2974.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2975[3], i2974.comp)
  return i2974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2979 = data
  i2978.name = i2979[0]
  i2978.value = i2979[1]
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2983 = data
  var i2985 = i2983[0]
  var i2984 = []
  for(var i = 0; i < i2985.length; i += 1) {
    i2984.push( i2985[i + 0] );
  }
  i2982.keywords = i2984
  i2982.hasDiscard = !!i2983[1]
  return i2982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2989 = data
  i2988.passId = i2989[0]
  i2988.subShaderIndex = i2989[1]
  var i2991 = i2989[2]
  var i2990 = []
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.push( i2991[i + 0] );
  }
  i2988.keywords = i2990
  i2988.vertexProgram = i2989[3]
  i2988.fragmentProgram = i2989[4]
  i2988.exportedForWebGl2 = !!i2989[5]
  i2988.readDepth = !!i2989[6]
  return i2988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2995 = data
  request.r(i2995[0], i2995[1], 0, i2994, 'shader')
  i2994.pass = i2995[2]
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2999 = data
  i2998.name = i2999[0]
  i2998.type = i2999[1]
  i2998.value = new pc.Vec4( i2999[2], i2999[3], i2999[4], i2999[5] )
  i2998.textureValue = i2999[6]
  i2998.shaderPropertyFlag = i2999[7]
  return i2998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3001 = data
  i3000.name = i3001[0]
  request.r(i3001[1], i3001[2], 0, i3000, 'texture')
  i3000.aabb = i3001[3]
  i3000.vertices = i3001[4]
  i3000.triangles = i3001[5]
  i3000.textureRect = UnityEngine.Rect.MinMaxRect(i3001[6], i3001[7], i3001[8], i3001[9])
  i3000.packedRect = UnityEngine.Rect.MinMaxRect(i3001[10], i3001[11], i3001[12], i3001[13])
  i3000.border = new pc.Vec4( i3001[14], i3001[15], i3001[16], i3001[17] )
  i3000.transparency = i3001[18]
  i3000.bounds = i3001[19]
  i3000.pixelsPerUnit = i3001[20]
  i3000.textureWidth = i3001[21]
  i3000.textureHeight = i3001[22]
  i3000.nativeSize = new pc.Vec2( i3001[23], i3001[24] )
  i3000.pivot = new pc.Vec2( i3001[25], i3001[26] )
  i3000.textureRectOffset = new pc.Vec2( i3001[27], i3001[28] )
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3003 = data
  i3002.name = i3003[0]
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3005 = data
  i3004.name = i3005[0]
  i3004.wrapMode = i3005[1]
  i3004.isLooping = !!i3005[2]
  i3004.length = i3005[3]
  var i3007 = i3005[4]
  var i3006 = []
  for(var i = 0; i < i3007.length; i += 1) {
    i3006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3007[i + 0]) );
  }
  i3004.curves = i3006
  var i3009 = i3005[5]
  var i3008 = []
  for(var i = 0; i < i3009.length; i += 1) {
    i3008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3009[i + 0]) );
  }
  i3004.events = i3008
  i3004.halfPrecision = !!i3005[6]
  i3004._frameRate = i3005[7]
  i3004.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3005[8], i3004.localBounds)
  i3004.hasMuscleCurves = !!i3005[9]
  var i3011 = i3005[10]
  var i3010 = []
  for(var i = 0; i < i3011.length; i += 1) {
    i3010.push( i3011[i + 0] );
  }
  i3004.clipMuscleConstant = i3010
  i3004.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3005[11], i3004.clipBindingConstant)
  return i3004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3015 = data
  i3014.path = i3015[0]
  i3014.hash = i3015[1]
  i3014.componentType = i3015[2]
  i3014.property = i3015[3]
  i3014.keys = i3015[4]
  var i3017 = i3015[5]
  var i3016 = []
  for(var i = 0; i < i3017.length; i += 1) {
    i3016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3017[i + 0]) );
  }
  i3014.objectReferenceKeys = i3016
  return i3014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3021 = data
  i3020.time = i3021[0]
  request.r(i3021[1], i3021[2], 0, i3020, 'value')
  return i3020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3025 = data
  i3024.functionName = i3025[0]
  i3024.floatParameter = i3025[1]
  i3024.intParameter = i3025[2]
  i3024.stringParameter = i3025[3]
  request.r(i3025[4], i3025[5], 0, i3024, 'objectReferenceParameter')
  i3024.time = i3025[6]
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3027 = data
  i3026.center = new pc.Vec3( i3027[0], i3027[1], i3027[2] )
  i3026.extends = new pc.Vec3( i3027[3], i3027[4], i3027[5] )
  return i3026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3031 = data
  var i3033 = i3031[0]
  var i3032 = []
  for(var i = 0; i < i3033.length; i += 1) {
    i3032.push( i3033[i + 0] );
  }
  i3030.genericBindings = i3032
  var i3035 = i3031[1]
  var i3034 = []
  for(var i = 0; i < i3035.length; i += 1) {
    i3034.push( i3035[i + 0] );
  }
  i3030.pptrCurveMapping = i3034
  return i3030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3037 = data
  i3036.name = i3037[0]
  var i3039 = i3037[1]
  var i3038 = []
  for(var i = 0; i < i3039.length; i += 1) {
    i3038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3039[i + 0]) );
  }
  i3036.layers = i3038
  var i3041 = i3037[2]
  var i3040 = []
  for(var i = 0; i < i3041.length; i += 1) {
    i3040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3041[i + 0]) );
  }
  i3036.parameters = i3040
  i3036.animationClips = i3037[3]
  i3036.avatarUnsupported = i3037[4]
  return i3036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3045 = data
  i3044.name = i3045[0]
  i3044.defaultWeight = i3045[1]
  i3044.blendingMode = i3045[2]
  i3044.avatarMask = i3045[3]
  i3044.syncedLayerIndex = i3045[4]
  i3044.syncedLayerAffectsTiming = !!i3045[5]
  i3044.syncedLayers = i3045[6]
  i3044.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3045[7], i3044.stateMachine)
  return i3044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3047 = data
  i3046.id = i3047[0]
  i3046.name = i3047[1]
  i3046.path = i3047[2]
  var i3049 = i3047[3]
  var i3048 = []
  for(var i = 0; i < i3049.length; i += 1) {
    i3048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3049[i + 0]) );
  }
  i3046.states = i3048
  var i3051 = i3047[4]
  var i3050 = []
  for(var i = 0; i < i3051.length; i += 1) {
    i3050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3051[i + 0]) );
  }
  i3046.machines = i3050
  var i3053 = i3047[5]
  var i3052 = []
  for(var i = 0; i < i3053.length; i += 1) {
    i3052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3053[i + 0]) );
  }
  i3046.entryStateTransitions = i3052
  var i3055 = i3047[6]
  var i3054 = []
  for(var i = 0; i < i3055.length; i += 1) {
    i3054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3055[i + 0]) );
  }
  i3046.exitStateTransitions = i3054
  var i3057 = i3047[7]
  var i3056 = []
  for(var i = 0; i < i3057.length; i += 1) {
    i3056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3057[i + 0]) );
  }
  i3046.anyStateTransitions = i3056
  i3046.defaultStateId = i3047[8]
  return i3046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3061 = data
  i3060.id = i3061[0]
  i3060.name = i3061[1]
  i3060.cycleOffset = i3061[2]
  i3060.cycleOffsetParameter = i3061[3]
  i3060.cycleOffsetParameterActive = !!i3061[4]
  i3060.mirror = !!i3061[5]
  i3060.mirrorParameter = i3061[6]
  i3060.mirrorParameterActive = !!i3061[7]
  i3060.motionId = i3061[8]
  i3060.nameHash = i3061[9]
  i3060.fullPathHash = i3061[10]
  i3060.speed = i3061[11]
  i3060.speedParameter = i3061[12]
  i3060.speedParameterActive = !!i3061[13]
  i3060.tag = i3061[14]
  i3060.tagHash = i3061[15]
  i3060.writeDefaultValues = !!i3061[16]
  var i3063 = i3061[17]
  var i3062 = []
  for(var i = 0; i < i3063.length; i += 2) {
  request.r(i3063[i + 0], i3063[i + 1], 2, i3062, '')
  }
  i3060.behaviours = i3062
  var i3065 = i3061[18]
  var i3064 = []
  for(var i = 0; i < i3065.length; i += 1) {
    i3064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3065[i + 0]) );
  }
  i3060.transitions = i3064
  return i3060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3071 = data
  i3070.fullPath = i3071[0]
  i3070.canTransitionToSelf = !!i3071[1]
  i3070.duration = i3071[2]
  i3070.exitTime = i3071[3]
  i3070.hasExitTime = !!i3071[4]
  i3070.hasFixedDuration = !!i3071[5]
  i3070.interruptionSource = i3071[6]
  i3070.offset = i3071[7]
  i3070.orderedInterruption = !!i3071[8]
  i3070.destinationStateId = i3071[9]
  i3070.isExit = !!i3071[10]
  i3070.mute = !!i3071[11]
  i3070.solo = !!i3071[12]
  var i3073 = i3071[13]
  var i3072 = []
  for(var i = 0; i < i3073.length; i += 1) {
    i3072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3073[i + 0]) );
  }
  i3070.conditions = i3072
  return i3070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3079 = data
  i3078.destinationStateId = i3079[0]
  i3078.isExit = !!i3079[1]
  i3078.mute = !!i3079[2]
  i3078.solo = !!i3079[3]
  var i3081 = i3079[4]
  var i3080 = []
  for(var i = 0; i < i3081.length; i += 1) {
    i3080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3081[i + 0]) );
  }
  i3078.conditions = i3080
  return i3078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3085 = data
  i3084.defaultBool = !!i3085[0]
  i3084.defaultFloat = i3085[1]
  i3084.defaultInt = i3085[2]
  i3084.name = i3085[3]
  i3084.nameHash = i3085[4]
  i3084.type = i3085[5]
  return i3084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3089 = data
  i3088.mode = i3089[0]
  i3088.parameter = i3089[1]
  i3088.threshold = i3089[2]
  return i3088
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3090 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3091 = data
  i3090.useSafeMode = !!i3091[0]
  i3090.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3091[1], i3090.safeModeOptions)
  i3090.timeScale = i3091[2]
  i3090.unscaledTimeScale = i3091[3]
  i3090.useSmoothDeltaTime = !!i3091[4]
  i3090.maxSmoothUnscaledTime = i3091[5]
  i3090.rewindCallbackMode = i3091[6]
  i3090.showUnityEditorReport = !!i3091[7]
  i3090.logBehaviour = i3091[8]
  i3090.drawGizmos = !!i3091[9]
  i3090.defaultRecyclable = !!i3091[10]
  i3090.defaultAutoPlay = i3091[11]
  i3090.defaultUpdateType = i3091[12]
  i3090.defaultTimeScaleIndependent = !!i3091[13]
  i3090.defaultEaseType = i3091[14]
  i3090.defaultEaseOvershootOrAmplitude = i3091[15]
  i3090.defaultEasePeriod = i3091[16]
  i3090.defaultAutoKill = !!i3091[17]
  i3090.defaultLoopType = i3091[18]
  i3090.debugMode = !!i3091[19]
  i3090.debugStoreTargetId = !!i3091[20]
  i3090.showPreviewPanel = !!i3091[21]
  i3090.storeSettingsLocation = i3091[22]
  i3090.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3091[23], i3090.modules)
  i3090.createASMDEF = !!i3091[24]
  i3090.showPlayingTweens = !!i3091[25]
  i3090.showPausedTweens = !!i3091[26]
  return i3090
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3092 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3093 = data
  i3092.logBehaviour = i3093[0]
  i3092.nestedTweenFailureBehaviour = i3093[1]
  return i3092
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3094 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3095 = data
  i3094.showPanel = !!i3095[0]
  i3094.audioEnabled = !!i3095[1]
  i3094.physicsEnabled = !!i3095[2]
  i3094.physics2DEnabled = !!i3095[3]
  i3094.spriteEnabled = !!i3095[4]
  i3094.uiEnabled = !!i3095[5]
  i3094.textMeshProEnabled = !!i3095[6]
  i3094.tk2DEnabled = !!i3095[7]
  i3094.deAudioEnabled = !!i3095[8]
  i3094.deUnityExtendedEnabled = !!i3095[9]
  i3094.epoOutlineEnabled = !!i3095[10]
  return i3094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3097 = data
  var i3099 = i3097[0]
  var i3098 = []
  for(var i = 0; i < i3099.length; i += 1) {
    i3098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3099[i + 0]) );
  }
  i3096.files = i3098
  i3096.componentToPrefabIds = i3097[1]
  return i3096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3103 = data
  i3102.path = i3103[0]
  request.r(i3103[1], i3103[2], 0, i3102, 'unityObject')
  return i3102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3105 = data
  var i3107 = i3105[0]
  var i3106 = []
  for(var i = 0; i < i3107.length; i += 1) {
    i3106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3107[i + 0]) );
  }
  i3104.scriptsExecutionOrder = i3106
  var i3109 = i3105[1]
  var i3108 = []
  for(var i = 0; i < i3109.length; i += 1) {
    i3108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3109[i + 0]) );
  }
  i3104.sortingLayers = i3108
  var i3111 = i3105[2]
  var i3110 = []
  for(var i = 0; i < i3111.length; i += 1) {
    i3110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3111[i + 0]) );
  }
  i3104.cullingLayers = i3110
  i3104.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3105[3], i3104.timeSettings)
  i3104.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3105[4], i3104.physicsSettings)
  i3104.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3105[5], i3104.physics2DSettings)
  i3104.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3105[6], i3104.qualitySettings)
  i3104.enableRealtimeShadows = !!i3105[7]
  i3104.enableAutoInstancing = !!i3105[8]
  i3104.enableDynamicBatching = !!i3105[9]
  i3104.lightmapEncodingQuality = i3105[10]
  i3104.desiredColorSpace = i3105[11]
  var i3113 = i3105[12]
  var i3112 = []
  for(var i = 0; i < i3113.length; i += 1) {
    i3112.push( i3113[i + 0] );
  }
  i3104.allTags = i3112
  return i3104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3117 = data
  i3116.name = i3117[0]
  i3116.value = i3117[1]
  return i3116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3121 = data
  i3120.id = i3121[0]
  i3120.name = i3121[1]
  i3120.value = i3121[2]
  return i3120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3125 = data
  i3124.id = i3125[0]
  i3124.name = i3125[1]
  return i3124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3127 = data
  i3126.fixedDeltaTime = i3127[0]
  i3126.maximumDeltaTime = i3127[1]
  i3126.timeScale = i3127[2]
  i3126.maximumParticleTimestep = i3127[3]
  return i3126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3129 = data
  i3128.gravity = new pc.Vec3( i3129[0], i3129[1], i3129[2] )
  i3128.defaultSolverIterations = i3129[3]
  i3128.bounceThreshold = i3129[4]
  i3128.autoSyncTransforms = !!i3129[5]
  i3128.autoSimulation = !!i3129[6]
  var i3131 = i3129[7]
  var i3130 = []
  for(var i = 0; i < i3131.length; i += 1) {
    i3130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3131[i + 0]) );
  }
  i3128.collisionMatrix = i3130
  return i3128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3135 = data
  i3134.enabled = !!i3135[0]
  i3134.layerId = i3135[1]
  i3134.otherLayerId = i3135[2]
  return i3134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3137 = data
  request.r(i3137[0], i3137[1], 0, i3136, 'material')
  i3136.gravity = new pc.Vec2( i3137[2], i3137[3] )
  i3136.positionIterations = i3137[4]
  i3136.velocityIterations = i3137[5]
  i3136.velocityThreshold = i3137[6]
  i3136.maxLinearCorrection = i3137[7]
  i3136.maxAngularCorrection = i3137[8]
  i3136.maxTranslationSpeed = i3137[9]
  i3136.maxRotationSpeed = i3137[10]
  i3136.baumgarteScale = i3137[11]
  i3136.baumgarteTOIScale = i3137[12]
  i3136.timeToSleep = i3137[13]
  i3136.linearSleepTolerance = i3137[14]
  i3136.angularSleepTolerance = i3137[15]
  i3136.defaultContactOffset = i3137[16]
  i3136.autoSimulation = !!i3137[17]
  i3136.queriesHitTriggers = !!i3137[18]
  i3136.queriesStartInColliders = !!i3137[19]
  i3136.callbacksOnDisable = !!i3137[20]
  i3136.reuseCollisionCallbacks = !!i3137[21]
  i3136.autoSyncTransforms = !!i3137[22]
  var i3139 = i3137[23]
  var i3138 = []
  for(var i = 0; i < i3139.length; i += 1) {
    i3138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3139[i + 0]) );
  }
  i3136.collisionMatrix = i3138
  return i3136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3143 = data
  i3142.enabled = !!i3143[0]
  i3142.layerId = i3143[1]
  i3142.otherLayerId = i3143[2]
  return i3142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3145 = data
  var i3147 = i3145[0]
  var i3146 = []
  for(var i = 0; i < i3147.length; i += 1) {
    i3146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3147[i + 0]) );
  }
  i3144.qualityLevels = i3146
  var i3149 = i3145[1]
  var i3148 = []
  for(var i = 0; i < i3149.length; i += 1) {
    i3148.push( i3149[i + 0] );
  }
  i3144.names = i3148
  i3144.shadows = i3145[2]
  i3144.anisotropicFiltering = i3145[3]
  i3144.antiAliasing = i3145[4]
  i3144.lodBias = i3145[5]
  i3144.shadowCascades = i3145[6]
  i3144.shadowDistance = i3145[7]
  i3144.shadowmaskMode = i3145[8]
  i3144.shadowProjection = i3145[9]
  i3144.shadowResolution = i3145[10]
  i3144.softParticles = !!i3145[11]
  i3144.softVegetation = !!i3145[12]
  i3144.activeColorSpace = i3145[13]
  i3144.desiredColorSpace = i3145[14]
  i3144.masterTextureLimit = i3145[15]
  i3144.maxQueuedFrames = i3145[16]
  i3144.particleRaycastBudget = i3145[17]
  i3144.pixelLightCount = i3145[18]
  i3144.realtimeReflectionProbes = !!i3145[19]
  i3144.shadowCascade2Split = i3145[20]
  i3144.shadowCascade4Split = new pc.Vec3( i3145[21], i3145[22], i3145[23] )
  i3144.streamingMipmapsActive = !!i3145[24]
  i3144.vSyncCount = i3145[25]
  i3144.asyncUploadBufferSize = i3145[26]
  i3144.asyncUploadTimeSlice = i3145[27]
  i3144.billboardsFaceCameraPosition = !!i3145[28]
  i3144.shadowNearPlaneOffset = i3145[29]
  i3144.streamingMipmapsMemoryBudget = i3145[30]
  i3144.maximumLODLevel = i3145[31]
  i3144.streamingMipmapsAddAllCameras = !!i3145[32]
  i3144.streamingMipmapsMaxLevelReduction = i3145[33]
  i3144.streamingMipmapsRenderersPerFrame = i3145[34]
  i3144.resolutionScalingFixedDPIFactor = i3145[35]
  i3144.streamingMipmapsMaxFileIORequests = i3145[36]
  i3144.currentQualityLevel = i3145[37]
  return i3144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3155 = data
  i3154.weight = i3155[0]
  i3154.vertices = i3155[1]
  i3154.normals = i3155[2]
  i3154.tangents = i3155[3]
  return i3154
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[7],"55":[10],"56":[19],"57":[19],"58":[19],"59":[19],"60":[19],"61":[19],"62":[19],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[10],"78":[4],"79":[80],"81":[80],"29":[28],"26":[2,4],"82":[28],"83":[10],"12":[10],"18":[17],"84":[85],"86":[28],"87":[28],"32":[29],"34":[33,28],"88":[28],"31":[29],"89":[28],"90":[28],"91":[28],"92":[28],"93":[28],"94":[28],"95":[28],"96":[28],"97":[28],"98":[33,28],"99":[28],"100":[28],"101":[28],"21":[28],"102":[33,28],"103":[28],"104":[38],"105":[38],"39":[38],"106":[38],"107":[10],"108":[10],"109":[85],"110":[28],"111":[4,28],"112":[28,33],"113":[28],"114":[33,28],"115":[4],"116":[33,28],"117":[28],"118":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.SkinnedMeshRenderer","UnityEngine.MonoBehaviour","CameraFollow","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rigidbody","Player","UnityEngine.UI.Slider","UnityEngine.ParticleSystem","UnityEngine.CapsuleCollider","UnityEngine.PhysicMaterial","UnityEngine.BoxCollider","SimpleOutline","UnityEngine.ParticleSystemRenderer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GM","UnityEngine.GameObject","EndTrigger","EndForce","RoadBlock","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.53f1";

Deserializers.productName = "TestFreePlay";

Deserializers.lunaInitializationTime = "06/20/2025 13:37:57";

Deserializers.lunaDaysRunning = "2.4";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "a";

Deserializers.lunaAppID = "13188";

Deserializers.projectId = "b9776f464a90a4e9493d54283b0705d8";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 14.0.11\ncom.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1743";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4257";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "00f63c51-9913-4231-b26b-89fa8deb55ed";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

