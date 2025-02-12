import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Filters from '@components/Educationalnstitutes/Filters'
import { FilterIcon } from '@components/Icons/FilterIcon'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'

export const EducationalInstitutesHeader = () => {
  const [t] = useTranslation()

  const [active, setActive] = useState(true)

  const openFilter = () => {
    setActive(!active)
  }

  return (
    <div className="border-b border-gray-thin py-5 xl:py-10">
      <div className="flex flex-col xl:mb-5 xl:flex-row xl:justify-between">
        <h1 className="text-xl">{t(Translation.PAGE_EDUCATIONAL_INSTITUTES_MAIN_TITLE)}</h1>
        <div className="flex flex-row items-center justify-between">
          <p className="text-base text-black-light">Home / Master</p>
          <Button
            variant="text"
            onClick={openFilter}
            LeftIcon={FilterIcon}
            className="xl:hidden"
          >
            <p>{`${
              !active
                ? t(Translation.PAGE_EDUCATIONAL_INSTITUTES_FILTER_OPEN)
                : t(Translation.PAGE_EDUCATIONAL_INSTITUTES_FILTER_CLOSE)
            }`}</p>
          </Button>
        </div>
      </div>
      <div className="w-full xl:hidden">
        <div
          className={`w-full flex-col items-start xl:flex xl:flex-row ${active ? `flex` : `hidden`}
           `}
        >
          <Filters />
        </div>
      </div>

      <div className="mt-4 hidden w-full flex-col items-center justify-center xl:flex">
        <Filters />
      </div>
    </div>
  )
}

export default EducationalInstitutesHeader
