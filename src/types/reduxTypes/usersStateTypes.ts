import { OrganizationType } from '@components/Profile/Organization/helper'

export interface IUserProps {
  user: IUser
  isSignInLoading: boolean
  isSignUpLoading: boolean
  isUserAvatarLoading: boolean
  isLogOutLoading: boolean
  isAuthenticated: boolean
  isRoleSelectSuccessful: boolean
  isUpdateProfileLoading: boolean
  isResetPasswordLoading: boolean
  error: string | null
  isRoleSelectLoading: boolean
  errorGoogleSignIn: string | null
  language: string
  selectedIndex: number
  isLanguageChangeLoading: boolean
  otp: number | null
}

export interface IUser {
  fullName: string
  role: keyof typeof Roles | null
  uuid: string
  name: string
  address: string
  phone: string
  imageURL: string
  email: string
  employeeQuantity: number
  organizationType: keyof typeof OrganizationType | null
}

export enum Roles {
  JobSeeker = 'JobSeeker',
  Organization = 'Organization',
  Admin = 'Admin',
  Partner = 'Partner',
  Institute = 'Institute',
  NOROLE = 'NOROLE',
}
