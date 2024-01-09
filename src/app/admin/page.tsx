import AdminPost from "@/components/adminPost/adminPost";
import AdminPostForm from "@/components/adminPostFom/AdminPostForm";
import AdminUser from "@/components/adminUser/AdminUser";
import AdminUserForm from "@/components/adminUserForm/AdminUserForm";
import React, { Suspense } from "react";

Suspense;
const Admin = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="flex justify-center p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <AdminPost />
        </Suspense>
      </div>
      <div>
        <AdminPostForm />
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <AdminUser />
        </Suspense>
      </div>
      <div>
        <AdminUserForm />
      </div>
    </section>
  );
};

export default Admin;
