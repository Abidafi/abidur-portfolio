'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)
  const animationRef = useRef(null)
  const timeRef = useRef(0)

  const createScene = () => {
    if (!containerRef.current) return null

    // Clean up previous scene
    if (rendererRef.current) {
      rendererRef.current.domElement.remove()
      rendererRef.current.dispose()
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }

    // Create scene, camera, renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.domElement.style.position = 'fixed'
    renderer.domElement.style.top = '0'
    renderer.domElement.style.left = '0'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.zIndex = '-10'
    renderer.domElement.style.pointerEvents = 'none'
    containerRef.current.appendChild(renderer.domElement)

    // Colors
    const shapeColors = [0x6C63FF, 0xFF6B6B, 0x4ECDC4, 0xFFE66D, 0xA855F7, 0x34D399]
    const shapes = []
    const shapeCount = 30

    // Create shapes with variety
    const geometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.IcosahedronGeometry(0.3),
      new THREE.TorusGeometry(0.25, 0.08, 12, 24),
      new THREE.OctahedronGeometry(0.3),
      new THREE.TorusKnotGeometry(0.2, 0.06, 64, 8),
      new THREE.DodecahedronGeometry(0.25),
    ]

    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[i % geometries.length]
      const color = shapeColors[Math.floor(Math.random() * shapeColors.length)]
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.1 + Math.random() * 0.2,
        wireframe: Math.random() > 0.5,
      })
      const mesh = new THREE.Mesh(geometry, material)
      
      // Position shapes in a 3D space
      const radius = 2 + Math.random() * 4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI * 2
      
      mesh.position.set(
        Math.sin(theta) * Math.cos(phi) * radius,
        Math.sin(theta) * Math.sin(phi) * radius * 0.6,
        Math.cos(theta) * radius * 0.5
      )
      
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      )
      
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.015,
          y: (Math.random() - 0.5) * 0.015,
          z: (Math.random() - 0.5) * 0.015
        },
        floatSpeed: 0.003 + Math.random() * 0.007,
        floatOffset: Math.random() * Math.PI * 2,
        orbitSpeed: 0.002 + Math.random() * 0.004,
        orbitRadius: radius,
        theta: theta,
        phi: phi,
        scale: 0.7 + Math.random() * 0.6,
        pulseSpeed: 0.5 + Math.random() * 0.5,
        pulseOffset: Math.random() * Math.PI * 2,
      }
      
      mesh.scale.set(mesh.userData.scale, mesh.userData.scale, mesh.userData.scale)
      scene.add(mesh)
      shapes.push(mesh)
    }

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const posArray = new Float32Array(particlesCount * 3)
    const colorsArray = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 3 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI * 2
      
      posArray[i] = Math.sin(theta) * Math.cos(phi) * radius
      posArray[i + 1] = Math.sin(theta) * Math.sin(phi) * radius * 0.7
      posArray[i + 2] = Math.cos(theta) * radius * 0.5
      
      const color = new THREE.Color(shapeColors[Math.floor(Math.random() * shapeColors.length)])
      colorsArray[i] = color.r
      colorsArray[i + 1] = color.g
      colorsArray[i + 2] = color.b
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3))
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Create connecting lines between nearby shapes
    let lineSegments = null
    const lineMaterial = new THREE.LineBasicMaterial({
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
    })

    // Camera position
    camera.position.z = 5

    // Mouse tracking
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const handleMouseMove = (event) => {
      targetMouseX = (event.clientX / window.innerWidth) * 2 - 1
      targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)
      timeRef.current += 0.01
      
      // Smooth mouse
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05
      
      // Update shapes
      shapes.forEach((shape, index) => {
        // Rotation
        shape.rotation.x += shape.userData.rotationSpeed.x
        shape.rotation.y += shape.userData.rotationSpeed.y
        shape.rotation.z += shape.userData.rotationSpeed.z
        
        // Floating
        const floatTime = timeRef.current * shape.userData.floatSpeed
        shape.position.y += Math.sin(floatTime + shape.userData.floatOffset) * 0.003
        shape.position.x += Math.cos(floatTime * 0.7 + shape.userData.floatOffset) * 0.003
        
        // Pulsing
        const pulse = 1 + Math.sin(timeRef.current * shape.userData.pulseSpeed + shape.userData.pulseOffset) * 0.1
        const baseScale = shape.userData.scale
        shape.scale.set(
          baseScale * pulse,
          baseScale * pulse,
          baseScale * pulse
        )
      })
      
      // Rotate particles
      particlesMesh.rotation.x += 0.0002
      particlesMesh.rotation.y += 0.0003
      
      // Update connecting lines
      if (lineSegments) {
        scene.remove(lineSegments)
        lineSegments.geometry.dispose()
      }
      
      const linePositions = []
      for (let i = 0; i < shapes.length; i++) {
        for (let j = i + 1; j < shapes.length; j++) {
          const dist = shapes[i].position.distanceTo(shapes[j].position)
          if (dist < 3 && dist > 0.5) {
            linePositions.push(
              shapes[i].position.x, shapes[i].position.y, shapes[i].position.z,
              shapes[j].position.x, shapes[j].position.y, shapes[j].position.z
            )
          }
        }
      }
      
      if (linePositions.length > 0) {
        const lineGeometry = new THREE.BufferGeometry()
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
        lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial)
        scene.add(lineSegments)
      }
      
      // Camera follow mouse
      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.02
      camera.position.y += (mouseY * 1.5 - camera.position.y) * 0.02
      camera.lookAt(0, 0, 0)
      
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    rendererRef.current = renderer

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (rendererRef.current) {
        rendererRef.current.domElement.remove()
        rendererRef.current.dispose()
      }
    }
  }

  useEffect(() => {
    const cleanup = createScene()
    return cleanup
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: -10 }} />
  )
}