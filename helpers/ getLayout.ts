import { LayoutType } from "@/enum/layout";
import AdminLayout from "@/layouts/AdminLayout";
import AuthLayout from "@/layouts/AuthLayout";
import ErrorLayout from "@/layouts/ErrorLayout";
import UserLayout from "@/layouts/UserLayout";
import { NextPageWithLayout } from "next";

export const getLayout = (Component: NextPageWithLayout) => {
    switch (Component.layout) {
        case LayoutType.Auth:
            return AuthLayout;
        case LayoutType.User:
            return UserLayout;
        case LayoutType.Error:
            return ErrorLayout;
        case LayoutType.Admin:
            return AdminLayout;
        default:
            return UserLayout;
    }
};