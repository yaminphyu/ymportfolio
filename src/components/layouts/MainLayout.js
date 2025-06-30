import React, { Suspense } from 'react'
import { Outlet } from 'react-router';

export default function MainLayout() {
  console.log("MainLayout");
  
  return (
    <Suspense fallback={<>Loading.....</>}>
      <Outlet />
    </Suspense>
  )
}
