'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    const shapes = []
    const geometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.IcosahedronGeometry(0.3),
      new THREE.TorusGeometry(0.3, 0.1, 16, 32),
      new THREE.OctahedronGeometry(0.3),
    ]

    const colors = [0x6C63FF, 0xFF6B6B, 0x4ECDC4, 0xFFE66D]

    geometries.forEach((geometry, i) => {
      const material = new THREE.MeshBasicMaterial({
        color: colors[i % colors.length],
        transparent: true,
        opacity: 0.15 + Math.random() * 0.15,
        wireframe: Math.random() > 0.5,
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10)
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
      mesh.userData = {
        rotationSpeed: { x: (Math.random() - 0.5) * 0.01, y: (Math.random() - 0.5) * 0.01, z: (Math.random() - 0.5) * 0.01 },
        floatSpeed: 0.005 + Math.random() * 0.01,
        floatOffset: Math.random() * Math.PI * 2,
      }
      scene.add(mesh)
      shapes.push(mesh)
    })

    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1000
    const posArray = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x6C63FF,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    camera.position.z = 5

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      requestAnimationFrame(animate)
      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.rotationSpeed.x
        shape.rotation.y += shape.userData.rotationSpeed.y
        shape.rotation.z += shape.userData.rotationSpeed.z
        const time = Date.now() * shape.userData.floatSpeed
        shape.position.y += Math.sin(time + shape.userData.floatOffset) * 0.001
        shape.position.x += Math.cos(time * 0.5 + shape.userData.floatOffset) * 0.001
      })
      particlesMesh.rotation.x += 0.0001
      particlesMesh.rotation.y += 0.0002
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.02
      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 -z-10" />
}