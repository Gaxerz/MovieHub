import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Box } from '@mui/material'
import AppLayout from '../Layout'
import HomePage from '../components/HomePgae'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <AppLayout><HomePage /></AppLayout>
  )
}
