import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import SignIn from "@pages/Authentication/SignIn";
import DefaultLayout from "layout/DefaultLayout";
import Dashboard from "@pages/Dashboard";
import Loader from "common/Loader";
import UserDetail from "@pages/UserDetail";
import Users from "@pages/Users";
import TherapistRating from "@pages/TherapistRating";
import Therapist from "@pages/Therapist";
import OrderDetail from "@pages/OrdersDetail";
import Orders from "@pages/Orders";
import Services from "@pages/Services";
import Payments from "@pages/Payments";
import ActivityDetail from "@pages/ActivityDetail";
import Activity from "@pages/Activity";
import TherapistLocations from "@pages/TherapistLocations";

export const LayoutComponent = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/auth/signin" element={<SignIn />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route element={<DefaultLayout />}>
          <Route index element={<Dashboard />} />
          <Route
            path="/users/detail/:id"
            element={
              <Suspense fallback={<Loader />}>
                <UserDetail />
              </Suspense>
            }
          />
          <Route
            path="/users"
            element={
              <Suspense fallback={<Loader />}>
                <Users />
              </Suspense>
            }
          />
          <Route
            path="/therapist/rating/:id"
            element={
              <Suspense fallback={<Loader />}>
                <TherapistRating />
              </Suspense>
            }
          />
          <Route
            path="/therapist/all"
            element={
              <Suspense fallback={<Loader />}>
                <TherapistLocations />
              </Suspense>
            }
          />
          <Route
            path="/therapist"
            element={
              <Suspense fallback={<Loader />}>
                <Therapist />
              </Suspense>
            }
          />
          <Route
            path="/orders/detail/:id"
            element={
              <Suspense fallback={<Loader />}>
                <OrderDetail />
              </Suspense>
            }
          />
          <Route
            path="/orders"
            element={
              <Suspense fallback={<Loader />}>
                <Orders />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense fallback={<Loader />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="/payments"
            element={
              <Suspense fallback={<Loader />}>
                <Payments />
              </Suspense>
            }
          />
          <Route
            path="/activity/detail/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ActivityDetail />
              </Suspense>
            }
          />
          <Route
            path="/activity"
            element={
              <Suspense fallback={<Loader />}>
                <Activity />
              </Suspense>
            }
          />
          <Route
            path="/*"
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};
