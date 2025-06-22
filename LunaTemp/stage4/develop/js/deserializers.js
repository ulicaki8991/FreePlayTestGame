var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.JointSpring' )
  var i1579 = data
  i1578.spring = i1579[0]
  i1578.damper = i1579[1]
  i1578.targetPosition = i1579[2]
  return i1578
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.JointMotor' )
  var i1581 = data
  i1580.m_TargetVelocity = i1581[0]
  i1580.m_Force = i1581[1]
  i1580.m_FreeSpin = i1581[2]
  return i1580
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.JointLimits' )
  var i1583 = data
  i1582.m_Min = i1583[0]
  i1582.m_Max = i1583[1]
  i1582.m_Bounciness = i1583[2]
  i1582.m_BounceMinVelocity = i1583[3]
  i1582.m_ContactDistance = i1583[4]
  i1582.minBounce = i1583[5]
  i1582.maxBounce = i1583[6]
  return i1582
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.JointDrive' )
  var i1585 = data
  i1584.m_PositionSpring = i1585[0]
  i1584.m_PositionDamper = i1585[1]
  i1584.m_MaximumForce = i1585[2]
  i1584.m_UseAcceleration = i1585[3]
  return i1584
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1587 = data
  i1586.m_Spring = i1587[0]
  i1586.m_Damper = i1587[1]
  return i1586
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1589 = data
  i1588.m_Limit = i1589[0]
  i1588.m_Bounciness = i1589[1]
  i1588.m_ContactDistance = i1589[2]
  return i1588
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1591 = data
  i1590.m_ExtremumSlip = i1591[0]
  i1590.m_ExtremumValue = i1591[1]
  i1590.m_AsymptoteSlip = i1591[2]
  i1590.m_AsymptoteValue = i1591[3]
  i1590.m_Stiffness = i1591[4]
  return i1590
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1593 = data
  i1592.m_LowerAngle = i1593[0]
  i1592.m_UpperAngle = i1593[1]
  return i1592
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1594 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1595 = data
  i1594.m_MotorSpeed = i1595[0]
  i1594.m_MaximumMotorTorque = i1595[1]
  return i1594
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1597 = data
  i1596.m_DampingRatio = i1597[0]
  i1596.m_Frequency = i1597[1]
  i1596.m_Angle = i1597[2]
  return i1596
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1598 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1599 = data
  i1598.m_LowerTranslation = i1599[0]
  i1598.m_UpperTranslation = i1599[1]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1600 = root || new pc.UnityMaterial()
  var i1601 = data
  i1600.name = i1601[0]
  request.r(i1601[1], i1601[2], 0, i1600, 'shader')
  i1600.renderQueue = i1601[3]
  i1600.enableInstancing = !!i1601[4]
  var i1603 = i1601[5]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1603[i + 0]) );
  }
  i1600.floatParameters = i1602
  var i1605 = i1601[6]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1605[i + 0]) );
  }
  i1600.colorParameters = i1604
  var i1607 = i1601[7]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1607[i + 0]) );
  }
  i1600.vectorParameters = i1606
  var i1609 = i1601[8]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1609[i + 0]) );
  }
  i1600.textureParameters = i1608
  var i1611 = i1601[9]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1611[i + 0]) );
  }
  i1600.materialFlags = i1610
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1615 = data
  i1614.name = i1615[0]
  i1614.value = i1615[1]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1619 = data
  i1618.name = i1619[0]
  i1618.value = new pc.Color(i1619[1], i1619[2], i1619[3], i1619[4])
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1623 = data
  i1622.name = i1623[0]
  i1622.value = new pc.Vec4( i1623[1], i1623[2], i1623[3], i1623[4] )
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1627 = data
  i1626.name = i1627[0]
  request.r(i1627[1], i1627[2], 0, i1626, 'value')
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1631 = data
  i1630.name = i1631[0]
  i1630.enabled = !!i1631[1]
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1633 = data
  i1632.name = i1633[0]
  i1632.width = i1633[1]
  i1632.height = i1633[2]
  i1632.mipmapCount = i1633[3]
  i1632.anisoLevel = i1633[4]
  i1632.filterMode = i1633[5]
  i1632.hdr = !!i1633[6]
  i1632.format = i1633[7]
  i1632.wrapMode = i1633[8]
  i1632.alphaIsTransparency = !!i1633[9]
  i1632.alphaSource = i1633[10]
  i1632.graphicsFormat = i1633[11]
  i1632.sRGBTexture = !!i1633[12]
  i1632.desiredColorSpace = i1633[13]
  i1632.wrapU = i1633[14]
  i1632.wrapV = i1633[15]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1635 = data
  i1634.name = i1635[0]
  i1634.halfPrecision = !!i1635[1]
  i1634.useUInt32IndexFormat = !!i1635[2]
  i1634.vertexCount = i1635[3]
  i1634.aabb = i1635[4]
  var i1637 = i1635[5]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( !!i1637[i + 0] );
  }
  i1634.streams = i1636
  i1634.vertices = i1635[6]
  var i1639 = i1635[7]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1639[i + 0]) );
  }
  i1634.subMeshes = i1638
  var i1641 = i1635[8]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 16) {
    i1640.push( new pc.Mat4().setData(i1641[i + 0], i1641[i + 1], i1641[i + 2], i1641[i + 3],  i1641[i + 4], i1641[i + 5], i1641[i + 6], i1641[i + 7],  i1641[i + 8], i1641[i + 9], i1641[i + 10], i1641[i + 11],  i1641[i + 12], i1641[i + 13], i1641[i + 14], i1641[i + 15]) );
  }
  i1634.bindposes = i1640
  var i1643 = i1635[9]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1643[i + 0]) );
  }
  i1634.blendShapes = i1642
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1649 = data
  i1648.triangles = i1649[0]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1655 = data
  i1654.name = i1655[0]
  var i1657 = i1655[1]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1657[i + 0]) );
  }
  i1654.frames = i1656
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1659 = data
  i1658.position = new pc.Vec3( i1659[0], i1659[1], i1659[2] )
  i1658.scale = new pc.Vec3( i1659[3], i1659[4], i1659[5] )
  i1658.rotation = new pc.Quat(i1659[6], i1659[7], i1659[8], i1659[9])
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1661 = data
  request.r(i1661[0], i1661[1], 0, i1660, 'sharedMesh')
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1663 = data
  request.r(i1663[0], i1663[1], 0, i1662, 'additionalVertexStreams')
  i1662.enabled = !!i1663[2]
  request.r(i1663[3], i1663[4], 0, i1662, 'sharedMaterial')
  var i1665 = i1663[5]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 2) {
  request.r(i1665[i + 0], i1665[i + 1], 2, i1664, '')
  }
  i1662.sharedMaterials = i1664
  i1662.receiveShadows = !!i1663[6]
  i1662.shadowCastingMode = i1663[7]
  i1662.sortingLayerID = i1663[8]
  i1662.sortingOrder = i1663[9]
  i1662.lightmapIndex = i1663[10]
  i1662.lightmapSceneIndex = i1663[11]
  i1662.lightmapScaleOffset = new pc.Vec4( i1663[12], i1663[13], i1663[14], i1663[15] )
  i1662.lightProbeUsage = i1663[16]
  i1662.reflectionProbeUsage = i1663[17]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1669 = data
  i1668.name = i1669[0]
  i1668.tagId = i1669[1]
  i1668.enabled = !!i1669[2]
  i1668.isStatic = !!i1669[3]
  i1668.layer = i1669[4]
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1671 = data
  i1670.enabled = !!i1671[0]
  request.r(i1671[1], i1671[2], 0, i1670, 'sharedMaterial')
  var i1673 = i1671[3]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 2) {
  request.r(i1673[i + 0], i1673[i + 1], 2, i1672, '')
  }
  i1670.sharedMaterials = i1672
  i1670.receiveShadows = !!i1671[4]
  i1670.shadowCastingMode = i1671[5]
  i1670.sortingLayerID = i1671[6]
  i1670.sortingOrder = i1671[7]
  i1670.lightmapIndex = i1671[8]
  i1670.lightmapSceneIndex = i1671[9]
  i1670.lightmapScaleOffset = new pc.Vec4( i1671[10], i1671[11], i1671[12], i1671[13] )
  i1670.lightProbeUsage = i1671[14]
  i1670.reflectionProbeUsage = i1671[15]
  request.r(i1671[16], i1671[17], 0, i1670, 'sharedMesh')
  var i1675 = i1671[18]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 2) {
  request.r(i1675[i + 0], i1675[i + 1], 2, i1674, '')
  }
  i1670.bones = i1674
  i1670.updateWhenOffscreen = !!i1671[19]
  i1670.localBounds = i1671[20]
  request.r(i1671[21], i1671[22], 0, i1670, 'rootBone')
  var i1677 = i1671[23]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1677[i + 0]) );
  }
  i1670.blendShapesWeights = i1676
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1683 = data
  i1682.weight = i1683[0]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1685 = data
  i1684.name = i1685[0]
  i1684.atlasId = i1685[1]
  i1684.mipmapCount = i1685[2]
  i1684.hdr = !!i1685[3]
  i1684.size = i1685[4]
  i1684.anisoLevel = i1685[5]
  i1684.filterMode = i1685[6]
  var i1687 = i1685[7]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 4) {
    i1686.push( UnityEngine.Rect.MinMaxRect(i1687[i + 0], i1687[i + 1], i1687[i + 2], i1687[i + 3]) );
  }
  i1684.rects = i1686
  i1684.wrapU = i1685[8]
  i1684.wrapV = i1685[9]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1691 = data
  i1690.name = i1691[0]
  i1690.index = i1691[1]
  i1690.startup = !!i1691[2]
  return i1690
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i1692 = root || request.c( 'CameraFollow' )
  var i1693 = data
  i1692.tracking = !!i1693[0]
  i1692.EndTarget = new pc.Vec3( i1693[1], i1693[2], i1693[3] )
  request.r(i1693[4], i1693[5], 0, i1692, 'target')
  i1692.smoothSpeed = i1693[6]
  i1692.offset = new pc.Vec3( i1693[7], i1693[8], i1693[9] )
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1695 = data
  i1694.enabled = !!i1695[0]
  i1694.aspect = i1695[1]
  i1694.orthographic = !!i1695[2]
  i1694.orthographicSize = i1695[3]
  i1694.backgroundColor = new pc.Color(i1695[4], i1695[5], i1695[6], i1695[7])
  i1694.nearClipPlane = i1695[8]
  i1694.farClipPlane = i1695[9]
  i1694.fieldOfView = i1695[10]
  i1694.depth = i1695[11]
  i1694.clearFlags = i1695[12]
  i1694.cullingMask = i1695[13]
  i1694.rect = i1695[14]
  request.r(i1695[15], i1695[16], 0, i1694, 'targetTexture')
  i1694.usePhysicalProperties = !!i1695[17]
  i1694.focalLength = i1695[18]
  i1694.sensorSize = new pc.Vec2( i1695[19], i1695[20] )
  i1694.lensShift = new pc.Vec2( i1695[21], i1695[22] )
  i1694.gateFit = i1695[23]
  i1694.commandBufferCount = i1695[24]
  i1694.cameraType = i1695[25]
  return i1694
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1696 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1697 = data
  i1696.m_RenderShadows = !!i1697[0]
  i1696.m_RequiresDepthTextureOption = i1697[1]
  i1696.m_RequiresOpaqueTextureOption = i1697[2]
  i1696.m_CameraType = i1697[3]
  var i1699 = i1697[4]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1699.length; i += 2) {
  request.r(i1699[i + 0], i1699[i + 1], 1, i1698, '')
  }
  i1696.m_Cameras = i1698
  i1696.m_RendererIndex = i1697[5]
  i1696.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1697[6] )
  request.r(i1697[7], i1697[8], 0, i1696, 'm_VolumeTrigger')
  i1696.m_VolumeFrameworkUpdateModeOption = i1697[9]
  i1696.m_RenderPostProcessing = !!i1697[10]
  i1696.m_Antialiasing = i1697[11]
  i1696.m_AntialiasingQuality = i1697[12]
  i1696.m_StopNaN = !!i1697[13]
  i1696.m_Dithering = !!i1697[14]
  i1696.m_ClearDepth = !!i1697[15]
  i1696.m_AllowXRRendering = !!i1697[16]
  i1696.m_AllowHDROutput = !!i1697[17]
  i1696.m_UseScreenCoordOverride = !!i1697[18]
  i1696.m_ScreenSizeOverride = new pc.Vec4( i1697[19], i1697[20], i1697[21], i1697[22] )
  i1696.m_ScreenCoordScaleBias = new pc.Vec4( i1697[23], i1697[24], i1697[25], i1697[26] )
  i1696.m_RequiresDepthTexture = !!i1697[27]
  i1696.m_RequiresColorTexture = !!i1697[28]
  i1696.m_Version = i1697[29]
  i1696.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i1697[30], i1696.m_TaaSettings)
  return i1696
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i1703 = data
  i1702.m_Quality = i1703[0]
  i1702.m_FrameInfluence = i1703[1]
  i1702.m_JitterScale = i1703[2]
  i1702.m_MipBias = i1703[3]
  i1702.m_VarianceClampScale = i1703[4]
  i1702.m_ContrastAdaptiveSharpening = i1703[5]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1705 = data
  request.r(i1705[0], i1705[1], 0, i1704, 'clip')
  request.r(i1705[2], i1705[3], 0, i1704, 'outputAudioMixerGroup')
  i1704.playOnAwake = !!i1705[4]
  i1704.loop = !!i1705[5]
  i1704.time = i1705[6]
  i1704.volume = i1705[7]
  i1704.pitch = i1705[8]
  i1704.enabled = !!i1705[9]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1707 = data
  i1706.enabled = !!i1707[0]
  request.r(i1707[1], i1707[2], 0, i1706, 'sharedMaterial')
  var i1709 = i1707[3]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 2) {
  request.r(i1709[i + 0], i1709[i + 1], 2, i1708, '')
  }
  i1706.sharedMaterials = i1708
  i1706.receiveShadows = !!i1707[4]
  i1706.shadowCastingMode = i1707[5]
  i1706.sortingLayerID = i1707[6]
  i1706.sortingOrder = i1707[7]
  i1706.lightmapIndex = i1707[8]
  i1706.lightmapSceneIndex = i1707[9]
  i1706.lightmapScaleOffset = new pc.Vec4( i1707[10], i1707[11], i1707[12], i1707[13] )
  i1706.lightProbeUsage = i1707[14]
  i1706.reflectionProbeUsage = i1707[15]
  i1706.color = new pc.Color(i1707[16], i1707[17], i1707[18], i1707[19])
  request.r(i1707[20], i1707[21], 0, i1706, 'sprite')
  i1706.flipX = !!i1707[22]
  i1706.flipY = !!i1707[23]
  i1706.drawMode = i1707[24]
  i1706.size = new pc.Vec2( i1707[25], i1707[26] )
  i1706.tileMode = i1707[27]
  i1706.adaptiveModeThreshold = i1707[28]
  i1706.maskInteraction = i1707[29]
  i1706.spriteSortPoint = i1707[30]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1711 = data
  i1710.enabled = !!i1711[0]
  i1710.type = i1711[1]
  i1710.color = new pc.Color(i1711[2], i1711[3], i1711[4], i1711[5])
  i1710.cullingMask = i1711[6]
  i1710.intensity = i1711[7]
  i1710.range = i1711[8]
  i1710.spotAngle = i1711[9]
  i1710.shadows = i1711[10]
  i1710.shadowNormalBias = i1711[11]
  i1710.shadowBias = i1711[12]
  i1710.shadowStrength = i1711[13]
  i1710.shadowResolution = i1711[14]
  i1710.lightmapBakeType = i1711[15]
  i1710.renderMode = i1711[16]
  request.r(i1711[17], i1711[18], 0, i1710, 'cookie')
  i1710.cookieSize = i1711[19]
  return i1710
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i1713 = data
  i1712.m_Version = i1713[0]
  i1712.m_UsePipelineSettings = !!i1713[1]
  i1712.m_AdditionalLightsShadowResolutionTier = i1713[2]
  i1712.m_LightLayerMask = i1713[3]
  i1712.m_RenderingLayers = i1713[4]
  i1712.m_CustomShadowLayers = !!i1713[5]
  i1712.m_ShadowLayerMask = i1713[6]
  i1712.m_ShadowRenderingLayers = i1713[7]
  i1712.m_LightCookieSize = new pc.Vec2( i1713[8], i1713[9] )
  i1712.m_LightCookieOffset = new pc.Vec2( i1713[10], i1713[11] )
  i1712.m_SoftShadowQuality = i1713[12]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1715 = data
  i1714.mass = i1715[0]
  i1714.drag = i1715[1]
  i1714.angularDrag = i1715[2]
  i1714.useGravity = !!i1715[3]
  i1714.isKinematic = !!i1715[4]
  i1714.constraints = i1715[5]
  i1714.maxAngularVelocity = i1715[6]
  i1714.collisionDetectionMode = i1715[7]
  i1714.interpolation = i1715[8]
  return i1714
}

Deserializers["Player"] = function (request, data, root) {
  var i1716 = root || request.c( 'Player' )
  var i1717 = data
  i1716.controllSound = !!i1717[0]
  request.r(i1717[1], i1717[2], 0, i1716, 'powerSlider')
  i1716.power = i1717[3]
  request.r(i1717[4], i1717[5], 0, i1716, 'rb')
  i1716.speed = i1717[6]
  i1716.maxSpeed = i1717[7]
  var i1719 = i1717[8]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 2) {
  request.r(i1719[i + 0], i1719[i + 1], 2, i1718, '')
  }
  i1716.wheels = i1718
  request.r(i1717[9], i1717[10], 0, i1716, 'propeller')
  request.r(i1717[11], i1717[12], 0, i1716, 'windParticleSystem')
  request.r(i1717[13], i1717[14], 0, i1716, 'propellerAudio')
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1721 = data
  i1720.center = new pc.Vec3( i1721[0], i1721[1], i1721[2] )
  i1720.radius = i1721[3]
  i1720.height = i1721[4]
  i1720.direction = i1721[5]
  i1720.enabled = !!i1721[6]
  i1720.isTrigger = !!i1721[7]
  request.r(i1721[8], i1721[9], 0, i1720, 'material')
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1723 = data
  i1722.center = new pc.Vec3( i1723[0], i1723[1], i1723[2] )
  i1722.size = new pc.Vec3( i1723[3], i1723[4], i1723[5] )
  i1722.enabled = !!i1723[6]
  i1722.isTrigger = !!i1723[7]
  request.r(i1723[8], i1723[9], 0, i1722, 'material')
  return i1722
}

Deserializers["SimpleOutline"] = function (request, data, root) {
  var i1724 = root || request.c( 'SimpleOutline' )
  var i1725 = data
  i1724.outlineColor = new pc.Color(i1725[0], i1725[1], i1725[2], i1725[3])
  i1724.scaleFactor = i1725[4]
  request.r(i1725[5], i1725[6], 0, i1724, 'outlineMaterial')
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1727 = data
  i1726.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1727[0], i1726.main)
  i1726.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1727[1], i1726.colorBySpeed)
  i1726.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1727[2], i1726.colorOverLifetime)
  i1726.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1727[3], i1726.emission)
  i1726.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1727[4], i1726.rotationBySpeed)
  i1726.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1727[5], i1726.rotationOverLifetime)
  i1726.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1727[6], i1726.shape)
  i1726.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1727[7], i1726.sizeBySpeed)
  i1726.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1727[8], i1726.sizeOverLifetime)
  i1726.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1727[9], i1726.textureSheetAnimation)
  i1726.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1727[10], i1726.velocityOverLifetime)
  i1726.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1727[11], i1726.noise)
  i1726.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1727[12], i1726.inheritVelocity)
  i1726.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1727[13], i1726.forceOverLifetime)
  i1726.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1727[14], i1726.limitVelocityOverLifetime)
  i1726.useAutoRandomSeed = !!i1727[15]
  i1726.randomSeed = i1727[16]
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1728 = root || new pc.ParticleSystemMain()
  var i1729 = data
  i1728.duration = i1729[0]
  i1728.loop = !!i1729[1]
  i1728.prewarm = !!i1729[2]
  i1728.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[3], i1728.startDelay)
  i1728.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[4], i1728.startLifetime)
  i1728.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[5], i1728.startSpeed)
  i1728.startSize3D = !!i1729[6]
  i1728.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[7], i1728.startSizeX)
  i1728.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[8], i1728.startSizeY)
  i1728.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[9], i1728.startSizeZ)
  i1728.startRotation3D = !!i1729[10]
  i1728.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[11], i1728.startRotationX)
  i1728.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[12], i1728.startRotationY)
  i1728.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[13], i1728.startRotationZ)
  i1728.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1729[14], i1728.startColor)
  i1728.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[15], i1728.gravityModifier)
  i1728.simulationSpace = i1729[16]
  request.r(i1729[17], i1729[18], 0, i1728, 'customSimulationSpace')
  i1728.simulationSpeed = i1729[19]
  i1728.useUnscaledTime = !!i1729[20]
  i1728.scalingMode = i1729[21]
  i1728.playOnAwake = !!i1729[22]
  i1728.maxParticles = i1729[23]
  i1728.emitterVelocityMode = i1729[24]
  i1728.stopAction = i1729[25]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1730 = root || new pc.MinMaxCurve()
  var i1731 = data
  i1730.mode = i1731[0]
  i1730.curveMin = new pc.AnimationCurve( { keys_flow: i1731[1] } )
  i1730.curveMax = new pc.AnimationCurve( { keys_flow: i1731[2] } )
  i1730.curveMultiplier = i1731[3]
  i1730.constantMin = i1731[4]
  i1730.constantMax = i1731[5]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1732 = root || new pc.MinMaxGradient()
  var i1733 = data
  i1732.mode = i1733[0]
  i1732.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1733[1], i1732.gradientMin)
  i1732.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1733[2], i1732.gradientMax)
  i1732.colorMin = new pc.Color(i1733[3], i1733[4], i1733[5], i1733[6])
  i1732.colorMax = new pc.Color(i1733[7], i1733[8], i1733[9], i1733[10])
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1735 = data
  i1734.mode = i1735[0]
  var i1737 = i1735[1]
  var i1736 = []
  for(var i = 0; i < i1737.length; i += 1) {
    i1736.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1737[i + 0]) );
  }
  i1734.colorKeys = i1736
  var i1739 = i1735[2]
  var i1738 = []
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1739[i + 0]) );
  }
  i1734.alphaKeys = i1738
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1740 = root || new pc.ParticleSystemColorBySpeed()
  var i1741 = data
  i1740.enabled = !!i1741[0]
  i1740.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1741[1], i1740.color)
  i1740.range = new pc.Vec2( i1741[2], i1741[3] )
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1745 = data
  i1744.color = new pc.Color(i1745[0], i1745[1], i1745[2], i1745[3])
  i1744.time = i1745[4]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1749 = data
  i1748.alpha = i1749[0]
  i1748.time = i1749[1]
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1750 = root || new pc.ParticleSystemColorOverLifetime()
  var i1751 = data
  i1750.enabled = !!i1751[0]
  i1750.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1751[1], i1750.color)
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1752 = root || new pc.ParticleSystemEmitter()
  var i1753 = data
  i1752.enabled = !!i1753[0]
  i1752.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[1], i1752.rateOverTime)
  i1752.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[2], i1752.rateOverDistance)
  var i1755 = i1753[3]
  var i1754 = []
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1755[i + 0]) );
  }
  i1752.bursts = i1754
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1758 = root || new pc.ParticleSystemBurst()
  var i1759 = data
  i1758.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1759[0], i1758.count)
  i1758.cycleCount = i1759[1]
  i1758.minCount = i1759[2]
  i1758.maxCount = i1759[3]
  i1758.repeatInterval = i1759[4]
  i1758.time = i1759[5]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1760 = root || new pc.ParticleSystemRotationBySpeed()
  var i1761 = data
  i1760.enabled = !!i1761[0]
  i1760.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[1], i1760.x)
  i1760.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[2], i1760.y)
  i1760.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[3], i1760.z)
  i1760.separateAxes = !!i1761[4]
  i1760.range = new pc.Vec2( i1761[5], i1761[6] )
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1762 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1763 = data
  i1762.enabled = !!i1763[0]
  i1762.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[1], i1762.x)
  i1762.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[2], i1762.y)
  i1762.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[3], i1762.z)
  i1762.separateAxes = !!i1763[4]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1764 = root || new pc.ParticleSystemShape()
  var i1765 = data
  i1764.enabled = !!i1765[0]
  i1764.shapeType = i1765[1]
  i1764.randomDirectionAmount = i1765[2]
  i1764.sphericalDirectionAmount = i1765[3]
  i1764.randomPositionAmount = i1765[4]
  i1764.alignToDirection = !!i1765[5]
  i1764.radius = i1765[6]
  i1764.radiusMode = i1765[7]
  i1764.radiusSpread = i1765[8]
  i1764.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[9], i1764.radiusSpeed)
  i1764.radiusThickness = i1765[10]
  i1764.angle = i1765[11]
  i1764.length = i1765[12]
  i1764.boxThickness = new pc.Vec3( i1765[13], i1765[14], i1765[15] )
  i1764.meshShapeType = i1765[16]
  request.r(i1765[17], i1765[18], 0, i1764, 'mesh')
  request.r(i1765[19], i1765[20], 0, i1764, 'meshRenderer')
  request.r(i1765[21], i1765[22], 0, i1764, 'skinnedMeshRenderer')
  i1764.useMeshMaterialIndex = !!i1765[23]
  i1764.meshMaterialIndex = i1765[24]
  i1764.useMeshColors = !!i1765[25]
  i1764.normalOffset = i1765[26]
  i1764.arc = i1765[27]
  i1764.arcMode = i1765[28]
  i1764.arcSpread = i1765[29]
  i1764.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[30], i1764.arcSpeed)
  i1764.donutRadius = i1765[31]
  i1764.position = new pc.Vec3( i1765[32], i1765[33], i1765[34] )
  i1764.rotation = new pc.Vec3( i1765[35], i1765[36], i1765[37] )
  i1764.scale = new pc.Vec3( i1765[38], i1765[39], i1765[40] )
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1766 = root || new pc.ParticleSystemSizeBySpeed()
  var i1767 = data
  i1766.enabled = !!i1767[0]
  i1766.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[1], i1766.x)
  i1766.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[2], i1766.y)
  i1766.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[3], i1766.z)
  i1766.separateAxes = !!i1767[4]
  i1766.range = new pc.Vec2( i1767[5], i1767[6] )
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1768 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1769 = data
  i1768.enabled = !!i1769[0]
  i1768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[1], i1768.x)
  i1768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[2], i1768.y)
  i1768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[3], i1768.z)
  i1768.separateAxes = !!i1769[4]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1770 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1771 = data
  i1770.enabled = !!i1771[0]
  i1770.mode = i1771[1]
  i1770.animation = i1771[2]
  i1770.numTilesX = i1771[3]
  i1770.numTilesY = i1771[4]
  i1770.useRandomRow = !!i1771[5]
  i1770.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[6], i1770.frameOverTime)
  i1770.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[7], i1770.startFrame)
  i1770.cycleCount = i1771[8]
  i1770.rowIndex = i1771[9]
  i1770.flipU = i1771[10]
  i1770.flipV = i1771[11]
  i1770.spriteCount = i1771[12]
  var i1773 = i1771[13]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 2) {
  request.r(i1773[i + 0], i1773[i + 1], 2, i1772, '')
  }
  i1770.sprites = i1772
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1776 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1777 = data
  i1776.enabled = !!i1777[0]
  i1776.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[1], i1776.x)
  i1776.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[2], i1776.y)
  i1776.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[3], i1776.z)
  i1776.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[4], i1776.radial)
  i1776.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[5], i1776.speedModifier)
  i1776.space = i1777[6]
  i1776.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[7], i1776.orbitalX)
  i1776.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[8], i1776.orbitalY)
  i1776.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[9], i1776.orbitalZ)
  i1776.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[10], i1776.orbitalOffsetX)
  i1776.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[11], i1776.orbitalOffsetY)
  i1776.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[12], i1776.orbitalOffsetZ)
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1778 = root || new pc.ParticleSystemNoise()
  var i1779 = data
  i1778.enabled = !!i1779[0]
  i1778.separateAxes = !!i1779[1]
  i1778.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[2], i1778.strengthX)
  i1778.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[3], i1778.strengthY)
  i1778.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[4], i1778.strengthZ)
  i1778.frequency = i1779[5]
  i1778.damping = !!i1779[6]
  i1778.octaveCount = i1779[7]
  i1778.octaveMultiplier = i1779[8]
  i1778.octaveScale = i1779[9]
  i1778.quality = i1779[10]
  i1778.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[11], i1778.scrollSpeed)
  i1778.scrollSpeedMultiplier = i1779[12]
  i1778.remapEnabled = !!i1779[13]
  i1778.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[14], i1778.remapX)
  i1778.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[15], i1778.remapY)
  i1778.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[16], i1778.remapZ)
  i1778.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[17], i1778.positionAmount)
  i1778.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[18], i1778.rotationAmount)
  i1778.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[19], i1778.sizeAmount)
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1780 = root || new pc.ParticleSystemInheritVelocity()
  var i1781 = data
  i1780.enabled = !!i1781[0]
  i1780.mode = i1781[1]
  i1780.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1781[2], i1780.curve)
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1782 = root || new pc.ParticleSystemForceOverLifetime()
  var i1783 = data
  i1782.enabled = !!i1783[0]
  i1782.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1783[1], i1782.x)
  i1782.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1783[2], i1782.y)
  i1782.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1783[3], i1782.z)
  i1782.space = i1783[4]
  i1782.randomized = !!i1783[5]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1784 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1785 = data
  i1784.enabled = !!i1785[0]
  i1784.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[1], i1784.limit)
  i1784.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[2], i1784.limitX)
  i1784.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[3], i1784.limitY)
  i1784.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[4], i1784.limitZ)
  i1784.dampen = i1785[5]
  i1784.separateAxes = !!i1785[6]
  i1784.space = i1785[7]
  i1784.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[8], i1784.drag)
  i1784.multiplyDragByParticleSize = !!i1785[9]
  i1784.multiplyDragByParticleVelocity = !!i1785[10]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1787 = data
  i1786.enabled = !!i1787[0]
  request.r(i1787[1], i1787[2], 0, i1786, 'sharedMaterial')
  var i1789 = i1787[3]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 2) {
  request.r(i1789[i + 0], i1789[i + 1], 2, i1788, '')
  }
  i1786.sharedMaterials = i1788
  i1786.receiveShadows = !!i1787[4]
  i1786.shadowCastingMode = i1787[5]
  i1786.sortingLayerID = i1787[6]
  i1786.sortingOrder = i1787[7]
  i1786.lightmapIndex = i1787[8]
  i1786.lightmapSceneIndex = i1787[9]
  i1786.lightmapScaleOffset = new pc.Vec4( i1787[10], i1787[11], i1787[12], i1787[13] )
  i1786.lightProbeUsage = i1787[14]
  i1786.reflectionProbeUsage = i1787[15]
  request.r(i1787[16], i1787[17], 0, i1786, 'mesh')
  i1786.meshCount = i1787[18]
  i1786.activeVertexStreamsCount = i1787[19]
  i1786.alignment = i1787[20]
  i1786.renderMode = i1787[21]
  i1786.sortMode = i1787[22]
  i1786.lengthScale = i1787[23]
  i1786.velocityScale = i1787[24]
  i1786.cameraVelocityScale = i1787[25]
  i1786.normalDirection = i1787[26]
  i1786.sortingFudge = i1787[27]
  i1786.minParticleSize = i1787[28]
  i1786.maxParticleSize = i1787[29]
  i1786.pivot = new pc.Vec3( i1787[30], i1787[31], i1787[32] )
  request.r(i1787[33], i1787[34], 0, i1786, 'trailMaterial')
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1791 = data
  i1790.pivot = new pc.Vec2( i1791[0], i1791[1] )
  i1790.anchorMin = new pc.Vec2( i1791[2], i1791[3] )
  i1790.anchorMax = new pc.Vec2( i1791[4], i1791[5] )
  i1790.sizeDelta = new pc.Vec2( i1791[6], i1791[7] )
  i1790.anchoredPosition3D = new pc.Vec3( i1791[8], i1791[9], i1791[10] )
  i1790.rotation = new pc.Quat(i1791[11], i1791[12], i1791[13], i1791[14])
  i1790.scale = new pc.Vec3( i1791[15], i1791[16], i1791[17] )
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1793 = data
  i1792.enabled = !!i1793[0]
  i1792.planeDistance = i1793[1]
  i1792.referencePixelsPerUnit = i1793[2]
  i1792.isFallbackOverlay = !!i1793[3]
  i1792.renderMode = i1793[4]
  i1792.renderOrder = i1793[5]
  i1792.sortingLayerName = i1793[6]
  i1792.sortingOrder = i1793[7]
  i1792.scaleFactor = i1793[8]
  request.r(i1793[9], i1793[10], 0, i1792, 'worldCamera')
  i1792.overrideSorting = !!i1793[11]
  i1792.pixelPerfect = !!i1793[12]
  i1792.targetDisplay = i1793[13]
  i1792.overridePixelPerfect = !!i1793[14]
  return i1792
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1795 = data
  i1794.m_UiScaleMode = i1795[0]
  i1794.m_ReferencePixelsPerUnit = i1795[1]
  i1794.m_ScaleFactor = i1795[2]
  i1794.m_ReferenceResolution = new pc.Vec2( i1795[3], i1795[4] )
  i1794.m_ScreenMatchMode = i1795[5]
  i1794.m_MatchWidthOrHeight = i1795[6]
  i1794.m_PhysicalUnit = i1795[7]
  i1794.m_FallbackScreenDPI = i1795[8]
  i1794.m_DefaultSpriteDPI = i1795[9]
  i1794.m_DynamicPixelsPerUnit = i1795[10]
  i1794.m_PresetInfoIsWorld = !!i1795[11]
  return i1794
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1797 = data
  i1796.m_IgnoreReversedGraphics = !!i1797[0]
  i1796.m_BlockingObjects = i1797[1]
  i1796.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1797[2] )
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1799 = data
  i1798.cullTransparentMesh = !!i1799[0]
  return i1798
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.UI.Image' )
  var i1801 = data
  request.r(i1801[0], i1801[1], 0, i1800, 'm_Sprite')
  i1800.m_Type = i1801[2]
  i1800.m_PreserveAspect = !!i1801[3]
  i1800.m_FillCenter = !!i1801[4]
  i1800.m_FillMethod = i1801[5]
  i1800.m_FillAmount = i1801[6]
  i1800.m_FillClockwise = !!i1801[7]
  i1800.m_FillOrigin = i1801[8]
  i1800.m_UseSpriteMesh = !!i1801[9]
  i1800.m_PixelsPerUnitMultiplier = i1801[10]
  request.r(i1801[11], i1801[12], 0, i1800, 'm_Material')
  i1800.m_Maskable = !!i1801[13]
  i1800.m_Color = new pc.Color(i1801[14], i1801[15], i1801[16], i1801[17])
  i1800.m_RaycastTarget = !!i1801[18]
  i1800.m_RaycastPadding = new pc.Vec4( i1801[19], i1801[20], i1801[21], i1801[22] )
  return i1800
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1803 = data
  request.r(i1803[0], i1803[1], 0, i1802, 'm_FillRect')
  request.r(i1803[2], i1803[3], 0, i1802, 'm_HandleRect')
  i1802.m_Direction = i1803[4]
  i1802.m_MinValue = i1803[5]
  i1802.m_MaxValue = i1803[6]
  i1802.m_WholeNumbers = !!i1803[7]
  i1802.m_Value = i1803[8]
  i1802.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1803[9], i1802.m_OnValueChanged)
  i1802.m_Navigation = request.d('UnityEngine.UI.Navigation', i1803[10], i1802.m_Navigation)
  i1802.m_Transition = i1803[11]
  i1802.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1803[12], i1802.m_Colors)
  i1802.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1803[13], i1802.m_SpriteState)
  i1802.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1803[14], i1802.m_AnimationTriggers)
  i1802.m_Interactable = !!i1803[15]
  request.r(i1803[16], i1803[17], 0, i1802, 'm_TargetGraphic')
  return i1802
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1805 = data
  i1804.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1805[0], i1804.m_PersistentCalls)
  return i1804
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1807 = data
  var i1809 = i1807[0]
  var i1808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.add(request.d('UnityEngine.Events.PersistentCall', i1809[i + 0]));
  }
  i1806.m_Calls = i1808
  return i1806
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1813 = data
  request.r(i1813[0], i1813[1], 0, i1812, 'm_Target')
  i1812.m_TargetAssemblyTypeName = i1813[2]
  i1812.m_MethodName = i1813[3]
  i1812.m_Mode = i1813[4]
  i1812.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1813[5], i1812.m_Arguments)
  i1812.m_CallState = i1813[6]
  return i1812
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1814 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1815 = data
  i1814.m_Mode = i1815[0]
  i1814.m_WrapAround = !!i1815[1]
  request.r(i1815[2], i1815[3], 0, i1814, 'm_SelectOnUp')
  request.r(i1815[4], i1815[5], 0, i1814, 'm_SelectOnDown')
  request.r(i1815[6], i1815[7], 0, i1814, 'm_SelectOnLeft')
  request.r(i1815[8], i1815[9], 0, i1814, 'm_SelectOnRight')
  return i1814
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1816 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1817 = data
  i1816.m_NormalColor = new pc.Color(i1817[0], i1817[1], i1817[2], i1817[3])
  i1816.m_HighlightedColor = new pc.Color(i1817[4], i1817[5], i1817[6], i1817[7])
  i1816.m_PressedColor = new pc.Color(i1817[8], i1817[9], i1817[10], i1817[11])
  i1816.m_SelectedColor = new pc.Color(i1817[12], i1817[13], i1817[14], i1817[15])
  i1816.m_DisabledColor = new pc.Color(i1817[16], i1817[17], i1817[18], i1817[19])
  i1816.m_ColorMultiplier = i1817[20]
  i1816.m_FadeDuration = i1817[21]
  return i1816
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1818 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1819 = data
  request.r(i1819[0], i1819[1], 0, i1818, 'm_HighlightedSprite')
  request.r(i1819[2], i1819[3], 0, i1818, 'm_PressedSprite')
  request.r(i1819[4], i1819[5], 0, i1818, 'm_SelectedSprite')
  request.r(i1819[6], i1819[7], 0, i1818, 'm_DisabledSprite')
  return i1818
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1820 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1821 = data
  i1820.m_NormalTrigger = i1821[0]
  i1820.m_HighlightedTrigger = i1821[1]
  i1820.m_PressedTrigger = i1821[2]
  i1820.m_SelectedTrigger = i1821[3]
  i1820.m_DisabledTrigger = i1821[4]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1823 = data
  request.r(i1823[0], i1823[1], 0, i1822, 'animatorController')
  request.r(i1823[2], i1823[3], 0, i1822, 'avatar')
  i1822.updateMode = i1823[4]
  i1822.hasTransformHierarchy = !!i1823[5]
  i1822.applyRootMotion = !!i1823[6]
  var i1825 = i1823[7]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 2) {
  request.r(i1825[i + 0], i1825[i + 1], 2, i1824, '')
  }
  i1822.humanBones = i1824
  i1822.enabled = !!i1823[8]
  return i1822
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1826 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1827 = data
  request.r(i1827[0], i1827[1], 0, i1826, 'm_ObjectArgument')
  i1826.m_ObjectArgumentAssemblyTypeName = i1827[2]
  i1826.m_IntArgument = i1827[3]
  i1826.m_FloatArgument = i1827[4]
  i1826.m_StringArgument = i1827[5]
  i1826.m_BoolArgument = !!i1827[6]
  return i1826
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1828 = root || request.c( 'UnityEngine.UI.Button' )
  var i1829 = data
  i1828.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1829[0], i1828.m_OnClick)
  i1828.m_Navigation = request.d('UnityEngine.UI.Navigation', i1829[1], i1828.m_Navigation)
  i1828.m_Transition = i1829[2]
  i1828.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1829[3], i1828.m_Colors)
  i1828.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1829[4], i1828.m_SpriteState)
  i1828.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1829[5], i1828.m_AnimationTriggers)
  i1828.m_Interactable = !!i1829[6]
  request.r(i1829[7], i1829[8], 0, i1828, 'm_TargetGraphic')
  return i1828
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1830 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1831 = data
  i1830.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1831[0], i1830.m_PersistentCalls)
  return i1830
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1832 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1833 = data
  request.r(i1833[0], i1833[1], 0, i1832, 'm_FirstSelected')
  i1832.m_sendNavigationEvents = !!i1833[2]
  i1832.m_DragThreshold = i1833[3]
  return i1832
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1834 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1835 = data
  i1834.m_HorizontalAxis = i1835[0]
  i1834.m_VerticalAxis = i1835[1]
  i1834.m_SubmitButton = i1835[2]
  i1834.m_CancelButton = i1835[3]
  i1834.m_InputActionsPerSecond = i1835[4]
  i1834.m_RepeatDelay = i1835[5]
  i1834.m_ForceModuleActive = !!i1835[6]
  i1834.m_SendPointerHoverToParent = !!i1835[7]
  return i1834
}

Deserializers["GM"] = function (request, data, root) {
  var i1836 = root || request.c( 'GM' )
  var i1837 = data
  i1836.EndGame = !!i1837[0]
  request.r(i1837[1], i1837[2], 0, i1836, 'cameraFollow')
  var i1839 = i1837[3]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 2) {
  request.r(i1839[i + 0], i1839[i + 1], 2, i1838, '')
  }
  i1836.objectsOfPlayer = i1838
  request.r(i1837[4], i1837[5], 0, i1836, 'Player')
  request.r(i1837[6], i1837[7], 0, i1836, 'TutorialSlider')
  var i1841 = i1837[8]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 2) {
  request.r(i1841[i + 0], i1841[i + 1], 2, i1840, '')
  }
  i1836.RegSlider = i1840
  var i1843 = i1837[9]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 2) {
  request.r(i1843[i + 0], i1843[i + 1], 2, i1842, '')
  }
  i1836.HiddingImages = i1842
  request.r(i1837[10], i1837[11], 0, i1836, 'Fader')
  request.r(i1837[12], i1837[13], 0, i1836, 'Fail')
  request.r(i1837[14], i1837[15], 0, i1836, 'CTA')
  request.r(i1837[16], i1837[17], 0, i1836, 'audioSource')
  request.r(i1837[18], i1837[19], 0, i1836, 'propellerAudio')
  request.r(i1837[20], i1837[21], 0, i1836, 'failSound')
  request.r(i1837[22], i1837[23], 0, i1836, 'brakeSound')
  request.r(i1837[24], i1837[25], 0, i1836, 'mainCamera')
  i1836.camSizeVer = i1837[26]
  i1836.camSizeHor = i1837[27]
  return i1836
}

Deserializers["EndTrigger"] = function (request, data, root) {
  var i1848 = root || request.c( 'EndTrigger' )
  var i1849 = data
  request.r(i1849[0], i1849[1], 0, i1848, 'gm')
  return i1848
}

Deserializers["EndForce"] = function (request, data, root) {
  var i1850 = root || request.c( 'EndForce' )
  var i1851 = data
  i1850.force = i1851[0]
  return i1850
}

Deserializers["RoadBlock"] = function (request, data, root) {
  var i1852 = root || request.c( 'RoadBlock' )
  var i1853 = data
  i1852.waitingTime = i1853[0]
  i1852.fallTime = i1853[1]
  request.r(i1853[2], i1853[3], 0, i1852, 'audioSource')
  request.r(i1853[4], i1853[5], 0, i1852, 'breakSound')
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1855 = data
  i1854.ambientIntensity = i1855[0]
  i1854.reflectionIntensity = i1855[1]
  i1854.ambientMode = i1855[2]
  i1854.ambientLight = new pc.Color(i1855[3], i1855[4], i1855[5], i1855[6])
  i1854.ambientSkyColor = new pc.Color(i1855[7], i1855[8], i1855[9], i1855[10])
  i1854.ambientGroundColor = new pc.Color(i1855[11], i1855[12], i1855[13], i1855[14])
  i1854.ambientEquatorColor = new pc.Color(i1855[15], i1855[16], i1855[17], i1855[18])
  i1854.fogColor = new pc.Color(i1855[19], i1855[20], i1855[21], i1855[22])
  i1854.fogEndDistance = i1855[23]
  i1854.fogStartDistance = i1855[24]
  i1854.fogDensity = i1855[25]
  i1854.fog = !!i1855[26]
  request.r(i1855[27], i1855[28], 0, i1854, 'skybox')
  i1854.fogMode = i1855[29]
  var i1857 = i1855[30]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1857[i + 0]) );
  }
  i1854.lightmaps = i1856
  i1854.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1855[31], i1854.lightProbes)
  i1854.lightmapsMode = i1855[32]
  i1854.mixedBakeMode = i1855[33]
  i1854.environmentLightingMode = i1855[34]
  i1854.ambientProbe = new pc.SphericalHarmonicsL2(i1855[35])
  i1854.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1855[36])
  i1854.useReferenceAmbientProbe = !!i1855[37]
  request.r(i1855[38], i1855[39], 0, i1854, 'customReflection')
  request.r(i1855[40], i1855[41], 0, i1854, 'defaultReflection')
  i1854.defaultReflectionMode = i1855[42]
  i1854.defaultReflectionResolution = i1855[43]
  i1854.sunLightObjectId = i1855[44]
  i1854.pixelLightCount = i1855[45]
  i1854.defaultReflectionHDR = !!i1855[46]
  i1854.hasLightDataAsset = !!i1855[47]
  i1854.hasManualGenerate = !!i1855[48]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1861 = data
  request.r(i1861[0], i1861[1], 0, i1860, 'lightmapColor')
  request.r(i1861[2], i1861[3], 0, i1860, 'lightmapDirection')
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1862 = root || new UnityEngine.LightProbes()
  var i1863 = data
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1871 = data
  i1870.AdditionalLightsPerObjectLimit = i1871[0]
  i1870.AdditionalLightsRenderingMode = i1871[1]
  i1870.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1871[2], i1870.LightRenderingMode)
  i1870.ColorGradingLutSize = i1871[3]
  i1870.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1871[4], i1870.ColorGradingMode)
  i1870.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1871[5], i1870.MainLightRenderingMode)
  i1870.MainLightRenderingModeValue = i1871[6]
  i1870.SupportsMainLightShadows = !!i1871[7]
  i1870.MixedLightingSupported = !!i1871[8]
  i1870.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1871[9], i1870.MsaaQuality)
  i1870.MSAA = i1871[10]
  i1870.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1871[11], i1870.OpaqueDownsampling)
  i1870.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i1871[12], i1870.MainLightShadowmapResolution)
  i1870.MainLightShadowmapResolutionValue = i1871[13]
  i1870.SupportsSoftShadows = !!i1871[14]
  i1870.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i1871[15], i1870.SoftShadowQuality)
  i1870.SoftShadowQualityValue = i1871[16]
  i1870.ShadowDistance = i1871[17]
  i1870.ShadowCascadeCount = i1871[18]
  i1870.Cascade2Split = i1871[19]
  i1870.Cascade3Split = new pc.Vec2( i1871[20], i1871[21] )
  i1870.Cascade4Split = new pc.Vec3( i1871[22], i1871[23], i1871[24] )
  i1870.CascadeBorder = i1871[25]
  i1870.ShadowDepthBias = i1871[26]
  i1870.ShadowNormalBias = i1871[27]
  i1870.RenderScale = i1871[28]
  i1870.RequireDepthTexture = !!i1871[29]
  i1870.RequireOpaqueTexture = !!i1871[30]
  i1870.SupportsHDR = !!i1871[31]
  i1870.SupportsTerrainHoles = !!i1871[32]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1873 = data
  i1872.Disabled = i1873[0]
  i1872.PerVertex = i1873[1]
  i1872.PerPixel = i1873[2]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1875 = data
  i1874.LowDynamicRange = i1875[0]
  i1874.HighDynamicRange = i1875[1]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1877 = data
  i1876.Disabled = i1877[0]
  i1876._2x = i1877[1]
  i1876._4x = i1877[2]
  i1876._8x = i1877[3]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1879 = data
  i1878.None = i1879[0]
  i1878._2xBilinear = i1879[1]
  i1878._4xBox = i1879[2]
  i1878._4xBilinear = i1879[3]
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i1881 = data
  i1880._256 = i1881[0]
  i1880._512 = i1881[1]
  i1880._1024 = i1881[2]
  i1880._2048 = i1881[3]
  i1880._4096 = i1881[4]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i1883 = data
  i1882.UsePipelineSettings = i1883[0]
  i1882.Low = i1883[1]
  i1882.Medium = i1883[2]
  i1882.High = i1883[3]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i1885 = data
  i1884.name = i1885[0]
  i1884.bounciness = i1885[1]
  i1884.dynamicFriction = i1885[2]
  i1884.staticFriction = i1885[3]
  i1884.frictionCombine = i1885[4]
  i1884.bounceCombine = i1885[5]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1887 = data
  var i1889 = i1887[0]
  var i1888 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1889[i + 0]));
  }
  i1886.ShaderCompilationErrors = i1888
  i1886.name = i1887[1]
  i1886.guid = i1887[2]
  var i1891 = i1887[3]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.push( i1891[i + 0] );
  }
  i1886.shaderDefinedKeywords = i1890
  var i1893 = i1887[4]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1893[i + 0]) );
  }
  i1886.passes = i1892
  var i1895 = i1887[5]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1895[i + 0]) );
  }
  i1886.usePasses = i1894
  var i1897 = i1887[6]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1897[i + 0]) );
  }
  i1886.defaultParameterValues = i1896
  request.r(i1887[7], i1887[8], 0, i1886, 'unityFallbackShader')
  i1886.readDepth = !!i1887[9]
  i1886.isCreatedByShaderGraph = !!i1887[10]
  i1886.compiled = !!i1887[11]
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1901 = data
  i1900.shaderName = i1901[0]
  i1900.errorMessage = i1901[1]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1906 = root || new pc.UnityShaderPass()
  var i1907 = data
  i1906.id = i1907[0]
  i1906.subShaderIndex = i1907[1]
  i1906.name = i1907[2]
  i1906.passType = i1907[3]
  i1906.grabPassTextureName = i1907[4]
  i1906.usePass = !!i1907[5]
  i1906.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1907[6], i1906.zTest)
  i1906.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1907[7], i1906.zWrite)
  i1906.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1907[8], i1906.culling)
  i1906.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1907[9], i1906.blending)
  i1906.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1907[10], i1906.alphaBlending)
  i1906.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1907[11], i1906.colorWriteMask)
  i1906.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1907[12], i1906.offsetUnits)
  i1906.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1907[13], i1906.offsetFactor)
  i1906.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1907[14], i1906.stencilRef)
  i1906.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1907[15], i1906.stencilReadMask)
  i1906.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1907[16], i1906.stencilWriteMask)
  i1906.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1907[17], i1906.stencilOp)
  i1906.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1907[18], i1906.stencilOpFront)
  i1906.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1907[19], i1906.stencilOpBack)
  var i1909 = i1907[20]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1909[i + 0]) );
  }
  i1906.tags = i1908
  var i1911 = i1907[21]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( i1911[i + 0] );
  }
  i1906.passDefinedKeywords = i1910
  var i1913 = i1907[22]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1913[i + 0]) );
  }
  i1906.passDefinedKeywordGroups = i1912
  var i1915 = i1907[23]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1915[i + 0]) );
  }
  i1906.variants = i1914
  var i1917 = i1907[24]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1917[i + 0]) );
  }
  i1906.excludedVariants = i1916
  i1906.hasDepthReader = !!i1907[25]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1919 = data
  i1918.val = i1919[0]
  i1918.name = i1919[1]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1921 = data
  i1920.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1921[0], i1920.src)
  i1920.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1921[1], i1920.dst)
  i1920.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1921[2], i1920.op)
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1923 = data
  i1922.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1923[0], i1922.pass)
  i1922.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1923[1], i1922.fail)
  i1922.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1923[2], i1922.zFail)
  i1922.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1923[3], i1922.comp)
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1927 = data
  i1926.name = i1927[0]
  i1926.value = i1927[1]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1931 = data
  var i1933 = i1931[0]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( i1933[i + 0] );
  }
  i1930.keywords = i1932
  i1930.hasDiscard = !!i1931[1]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1937 = data
  i1936.passId = i1937[0]
  i1936.subShaderIndex = i1937[1]
  var i1939 = i1937[2]
  var i1938 = []
  for(var i = 0; i < i1939.length; i += 1) {
    i1938.push( i1939[i + 0] );
  }
  i1936.keywords = i1938
  i1936.vertexProgram = i1937[3]
  i1936.fragmentProgram = i1937[4]
  i1936.exportedForWebGl2 = !!i1937[5]
  i1936.readDepth = !!i1937[6]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1943 = data
  request.r(i1943[0], i1943[1], 0, i1942, 'shader')
  i1942.pass = i1943[2]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1947 = data
  i1946.name = i1947[0]
  i1946.type = i1947[1]
  i1946.value = new pc.Vec4( i1947[2], i1947[3], i1947[4], i1947[5] )
  i1946.textureValue = i1947[6]
  i1946.shaderPropertyFlag = i1947[7]
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1949 = data
  i1948.name = i1949[0]
  request.r(i1949[1], i1949[2], 0, i1948, 'texture')
  i1948.aabb = i1949[3]
  i1948.vertices = i1949[4]
  i1948.triangles = i1949[5]
  i1948.textureRect = UnityEngine.Rect.MinMaxRect(i1949[6], i1949[7], i1949[8], i1949[9])
  i1948.packedRect = UnityEngine.Rect.MinMaxRect(i1949[10], i1949[11], i1949[12], i1949[13])
  i1948.border = new pc.Vec4( i1949[14], i1949[15], i1949[16], i1949[17] )
  i1948.transparency = i1949[18]
  i1948.bounds = i1949[19]
  i1948.pixelsPerUnit = i1949[20]
  i1948.textureWidth = i1949[21]
  i1948.textureHeight = i1949[22]
  i1948.nativeSize = new pc.Vec2( i1949[23], i1949[24] )
  i1948.pivot = new pc.Vec2( i1949[25], i1949[26] )
  i1948.textureRectOffset = new pc.Vec2( i1949[27], i1949[28] )
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1951 = data
  i1950.name = i1951[0]
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1953 = data
  i1952.name = i1953[0]
  i1952.wrapMode = i1953[1]
  i1952.isLooping = !!i1953[2]
  i1952.length = i1953[3]
  var i1955 = i1953[4]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1955[i + 0]) );
  }
  i1952.curves = i1954
  var i1957 = i1953[5]
  var i1956 = []
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1957[i + 0]) );
  }
  i1952.events = i1956
  i1952.halfPrecision = !!i1953[6]
  i1952._frameRate = i1953[7]
  i1952.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1953[8], i1952.localBounds)
  i1952.hasMuscleCurves = !!i1953[9]
  var i1959 = i1953[10]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( i1959[i + 0] );
  }
  i1952.clipMuscleConstant = i1958
  i1952.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1953[11], i1952.clipBindingConstant)
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1963 = data
  i1962.path = i1963[0]
  i1962.hash = i1963[1]
  i1962.componentType = i1963[2]
  i1962.property = i1963[3]
  i1962.keys = i1963[4]
  var i1965 = i1963[5]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1965[i + 0]) );
  }
  i1962.objectReferenceKeys = i1964
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1969 = data
  i1968.time = i1969[0]
  request.r(i1969[1], i1969[2], 0, i1968, 'value')
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1973 = data
  i1972.functionName = i1973[0]
  i1972.floatParameter = i1973[1]
  i1972.intParameter = i1973[2]
  i1972.stringParameter = i1973[3]
  request.r(i1973[4], i1973[5], 0, i1972, 'objectReferenceParameter')
  i1972.time = i1973[6]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1975 = data
  i1974.center = new pc.Vec3( i1975[0], i1975[1], i1975[2] )
  i1974.extends = new pc.Vec3( i1975[3], i1975[4], i1975[5] )
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1979 = data
  var i1981 = i1979[0]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( i1981[i + 0] );
  }
  i1978.genericBindings = i1980
  var i1983 = i1979[1]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( i1983[i + 0] );
  }
  i1978.pptrCurveMapping = i1982
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1985 = data
  i1984.name = i1985[0]
  var i1987 = i1985[1]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1987[i + 0]) );
  }
  i1984.layers = i1986
  var i1989 = i1985[2]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1989[i + 0]) );
  }
  i1984.parameters = i1988
  i1984.animationClips = i1985[3]
  i1984.avatarUnsupported = i1985[4]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1993 = data
  i1992.name = i1993[0]
  i1992.defaultWeight = i1993[1]
  i1992.blendingMode = i1993[2]
  i1992.avatarMask = i1993[3]
  i1992.syncedLayerIndex = i1993[4]
  i1992.syncedLayerAffectsTiming = !!i1993[5]
  i1992.syncedLayers = i1993[6]
  i1992.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1993[7], i1992.stateMachine)
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1995 = data
  i1994.id = i1995[0]
  i1994.name = i1995[1]
  i1994.path = i1995[2]
  var i1997 = i1995[3]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1997[i + 0]) );
  }
  i1994.states = i1996
  var i1999 = i1995[4]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1999[i + 0]) );
  }
  i1994.machines = i1998
  var i2001 = i1995[5]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2001[i + 0]) );
  }
  i1994.entryStateTransitions = i2000
  var i2003 = i1995[6]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2003[i + 0]) );
  }
  i1994.exitStateTransitions = i2002
  var i2005 = i1995[7]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2005[i + 0]) );
  }
  i1994.anyStateTransitions = i2004
  i1994.defaultStateId = i1995[8]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2009 = data
  i2008.id = i2009[0]
  i2008.name = i2009[1]
  i2008.cycleOffset = i2009[2]
  i2008.cycleOffsetParameter = i2009[3]
  i2008.cycleOffsetParameterActive = !!i2009[4]
  i2008.mirror = !!i2009[5]
  i2008.mirrorParameter = i2009[6]
  i2008.mirrorParameterActive = !!i2009[7]
  i2008.motionId = i2009[8]
  i2008.nameHash = i2009[9]
  i2008.fullPathHash = i2009[10]
  i2008.speed = i2009[11]
  i2008.speedParameter = i2009[12]
  i2008.speedParameterActive = !!i2009[13]
  i2008.tag = i2009[14]
  i2008.tagHash = i2009[15]
  i2008.writeDefaultValues = !!i2009[16]
  var i2011 = i2009[17]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 2) {
  request.r(i2011[i + 0], i2011[i + 1], 2, i2010, '')
  }
  i2008.behaviours = i2010
  var i2013 = i2009[18]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2013[i + 0]) );
  }
  i2008.transitions = i2012
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2019 = data
  i2018.fullPath = i2019[0]
  i2018.canTransitionToSelf = !!i2019[1]
  i2018.duration = i2019[2]
  i2018.exitTime = i2019[3]
  i2018.hasExitTime = !!i2019[4]
  i2018.hasFixedDuration = !!i2019[5]
  i2018.interruptionSource = i2019[6]
  i2018.offset = i2019[7]
  i2018.orderedInterruption = !!i2019[8]
  i2018.destinationStateId = i2019[9]
  i2018.isExit = !!i2019[10]
  i2018.mute = !!i2019[11]
  i2018.solo = !!i2019[12]
  var i2021 = i2019[13]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2021[i + 0]) );
  }
  i2018.conditions = i2020
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2027 = data
  i2026.destinationStateId = i2027[0]
  i2026.isExit = !!i2027[1]
  i2026.mute = !!i2027[2]
  i2026.solo = !!i2027[3]
  var i2029 = i2027[4]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2029[i + 0]) );
  }
  i2026.conditions = i2028
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2033 = data
  i2032.defaultBool = !!i2033[0]
  i2032.defaultFloat = i2033[1]
  i2032.defaultInt = i2033[2]
  i2032.name = i2033[3]
  i2032.nameHash = i2033[4]
  i2032.type = i2033[5]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2037 = data
  i2036.mode = i2037[0]
  i2036.parameter = i2037[1]
  i2036.threshold = i2037[2]
  return i2036
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2038 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2039 = data
  i2038.useSafeMode = !!i2039[0]
  i2038.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2039[1], i2038.safeModeOptions)
  i2038.timeScale = i2039[2]
  i2038.unscaledTimeScale = i2039[3]
  i2038.useSmoothDeltaTime = !!i2039[4]
  i2038.maxSmoothUnscaledTime = i2039[5]
  i2038.rewindCallbackMode = i2039[6]
  i2038.showUnityEditorReport = !!i2039[7]
  i2038.logBehaviour = i2039[8]
  i2038.drawGizmos = !!i2039[9]
  i2038.defaultRecyclable = !!i2039[10]
  i2038.defaultAutoPlay = i2039[11]
  i2038.defaultUpdateType = i2039[12]
  i2038.defaultTimeScaleIndependent = !!i2039[13]
  i2038.defaultEaseType = i2039[14]
  i2038.defaultEaseOvershootOrAmplitude = i2039[15]
  i2038.defaultEasePeriod = i2039[16]
  i2038.defaultAutoKill = !!i2039[17]
  i2038.defaultLoopType = i2039[18]
  i2038.debugMode = !!i2039[19]
  i2038.debugStoreTargetId = !!i2039[20]
  i2038.showPreviewPanel = !!i2039[21]
  i2038.storeSettingsLocation = i2039[22]
  i2038.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2039[23], i2038.modules)
  i2038.createASMDEF = !!i2039[24]
  i2038.showPlayingTweens = !!i2039[25]
  i2038.showPausedTweens = !!i2039[26]
  return i2038
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2040 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2041 = data
  i2040.logBehaviour = i2041[0]
  i2040.nestedTweenFailureBehaviour = i2041[1]
  return i2040
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2042 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2043 = data
  i2042.showPanel = !!i2043[0]
  i2042.audioEnabled = !!i2043[1]
  i2042.physicsEnabled = !!i2043[2]
  i2042.physics2DEnabled = !!i2043[3]
  i2042.spriteEnabled = !!i2043[4]
  i2042.uiEnabled = !!i2043[5]
  i2042.textMeshProEnabled = !!i2043[6]
  i2042.tk2DEnabled = !!i2043[7]
  i2042.deAudioEnabled = !!i2043[8]
  i2042.deUnityExtendedEnabled = !!i2043[9]
  i2042.epoOutlineEnabled = !!i2043[10]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2045 = data
  var i2047 = i2045[0]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2047[i + 0]) );
  }
  i2044.files = i2046
  i2044.componentToPrefabIds = i2045[1]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2051 = data
  i2050.path = i2051[0]
  request.r(i2051[1], i2051[2], 0, i2050, 'unityObject')
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2053 = data
  var i2055 = i2053[0]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2055[i + 0]) );
  }
  i2052.scriptsExecutionOrder = i2054
  var i2057 = i2053[1]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2057[i + 0]) );
  }
  i2052.sortingLayers = i2056
  var i2059 = i2053[2]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2059[i + 0]) );
  }
  i2052.cullingLayers = i2058
  i2052.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2053[3], i2052.timeSettings)
  i2052.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2053[4], i2052.physicsSettings)
  i2052.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2053[5], i2052.physics2DSettings)
  i2052.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2053[6], i2052.qualitySettings)
  i2052.enableRealtimeShadows = !!i2053[7]
  i2052.enableAutoInstancing = !!i2053[8]
  i2052.enableDynamicBatching = !!i2053[9]
  i2052.lightmapEncodingQuality = i2053[10]
  i2052.desiredColorSpace = i2053[11]
  var i2061 = i2053[12]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( i2061[i + 0] );
  }
  i2052.allTags = i2060
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2065 = data
  i2064.name = i2065[0]
  i2064.value = i2065[1]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2069 = data
  i2068.id = i2069[0]
  i2068.name = i2069[1]
  i2068.value = i2069[2]
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2073 = data
  i2072.id = i2073[0]
  i2072.name = i2073[1]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2075 = data
  i2074.fixedDeltaTime = i2075[0]
  i2074.maximumDeltaTime = i2075[1]
  i2074.timeScale = i2075[2]
  i2074.maximumParticleTimestep = i2075[3]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2077 = data
  i2076.gravity = new pc.Vec3( i2077[0], i2077[1], i2077[2] )
  i2076.defaultSolverIterations = i2077[3]
  i2076.bounceThreshold = i2077[4]
  i2076.autoSyncTransforms = !!i2077[5]
  i2076.autoSimulation = !!i2077[6]
  var i2079 = i2077[7]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2079[i + 0]) );
  }
  i2076.collisionMatrix = i2078
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2083 = data
  i2082.enabled = !!i2083[0]
  i2082.layerId = i2083[1]
  i2082.otherLayerId = i2083[2]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2085 = data
  request.r(i2085[0], i2085[1], 0, i2084, 'material')
  i2084.gravity = new pc.Vec2( i2085[2], i2085[3] )
  i2084.positionIterations = i2085[4]
  i2084.velocityIterations = i2085[5]
  i2084.velocityThreshold = i2085[6]
  i2084.maxLinearCorrection = i2085[7]
  i2084.maxAngularCorrection = i2085[8]
  i2084.maxTranslationSpeed = i2085[9]
  i2084.maxRotationSpeed = i2085[10]
  i2084.baumgarteScale = i2085[11]
  i2084.baumgarteTOIScale = i2085[12]
  i2084.timeToSleep = i2085[13]
  i2084.linearSleepTolerance = i2085[14]
  i2084.angularSleepTolerance = i2085[15]
  i2084.defaultContactOffset = i2085[16]
  i2084.autoSimulation = !!i2085[17]
  i2084.queriesHitTriggers = !!i2085[18]
  i2084.queriesStartInColliders = !!i2085[19]
  i2084.callbacksOnDisable = !!i2085[20]
  i2084.reuseCollisionCallbacks = !!i2085[21]
  i2084.autoSyncTransforms = !!i2085[22]
  var i2087 = i2085[23]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2087[i + 0]) );
  }
  i2084.collisionMatrix = i2086
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2091 = data
  i2090.enabled = !!i2091[0]
  i2090.layerId = i2091[1]
  i2090.otherLayerId = i2091[2]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2093 = data
  var i2095 = i2093[0]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2095[i + 0]) );
  }
  i2092.qualityLevels = i2094
  var i2097 = i2093[1]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.push( i2097[i + 0] );
  }
  i2092.names = i2096
  i2092.shadows = i2093[2]
  i2092.anisotropicFiltering = i2093[3]
  i2092.antiAliasing = i2093[4]
  i2092.lodBias = i2093[5]
  i2092.shadowCascades = i2093[6]
  i2092.shadowDistance = i2093[7]
  i2092.shadowmaskMode = i2093[8]
  i2092.shadowProjection = i2093[9]
  i2092.shadowResolution = i2093[10]
  i2092.softParticles = !!i2093[11]
  i2092.softVegetation = !!i2093[12]
  i2092.activeColorSpace = i2093[13]
  i2092.desiredColorSpace = i2093[14]
  i2092.masterTextureLimit = i2093[15]
  i2092.maxQueuedFrames = i2093[16]
  i2092.particleRaycastBudget = i2093[17]
  i2092.pixelLightCount = i2093[18]
  i2092.realtimeReflectionProbes = !!i2093[19]
  i2092.shadowCascade2Split = i2093[20]
  i2092.shadowCascade4Split = new pc.Vec3( i2093[21], i2093[22], i2093[23] )
  i2092.streamingMipmapsActive = !!i2093[24]
  i2092.vSyncCount = i2093[25]
  i2092.asyncUploadBufferSize = i2093[26]
  i2092.asyncUploadTimeSlice = i2093[27]
  i2092.billboardsFaceCameraPosition = !!i2093[28]
  i2092.shadowNearPlaneOffset = i2093[29]
  i2092.streamingMipmapsMemoryBudget = i2093[30]
  i2092.maximumLODLevel = i2093[31]
  i2092.streamingMipmapsAddAllCameras = !!i2093[32]
  i2092.streamingMipmapsMaxLevelReduction = i2093[33]
  i2092.streamingMipmapsRenderersPerFrame = i2093[34]
  i2092.resolutionScalingFixedDPIFactor = i2093[35]
  i2092.streamingMipmapsMaxFileIORequests = i2093[36]
  i2092.currentQualityLevel = i2093[37]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2103 = data
  i2102.weight = i2103[0]
  i2102.vertices = i2103[1]
  i2102.normals = i2103[2]
  i2102.tangents = i2103[3]
  return i2102
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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4258";

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

Deserializers.buildID = "4fb49e9a-0650-467c-b520-fa661ae3f470";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

