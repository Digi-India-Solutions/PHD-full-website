import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from '../Header/Header'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import AllBanner from '../../Pages/Banners/AllBanner'
import AddBanner from '../../Pages/Banners/AddBanner'
import EditBanner from '../../Pages/Banners/EditBanner'
import AllOrder from '../../Pages/Orders/AllOrder'
import EditOrder from '../../Pages/Orders/EditOrder'
import AllDisciplines from '../../Pages/Disciplines/AllDisciplines'
import AddDisciplines from '../../Pages/Disciplines/AddDisciplines'
import EditDisciplines from '../../Pages/Disciplines/EditDisciplines'
import AllDisciplinesCourse from '../../Pages/DisciplinesCourse/AllDisciplinesCourse'
import AddDisciplinesCourse from '../../Pages/DisciplinesCourse/AddDisciplinesCourse'
import EditDisciplinesCourse from '../../Pages/DisciplinesCourse/EditDisciplinesCourse'
import AllDisciplinesCourseDetails from '../../Pages/DisciplinesCourseDetails/AllDisciplinesCourseDetails'
import AddDisciplinesCourseDetails from '../../Pages/DisciplinesCourseDetails/AddDisciplinesCourseDetails'
import EditDisciplinesCourseDetails from '../../Pages/DisciplinesCourseDetails/EditDisciplinesCourseDetails'
import AllDisplines from '../../Pages/AllDisplines/AllDisplines'
import AllUniversity from '../../Pages/University/AllUniversity'
import AddUniversity from '../../Pages/University/AddUniversity'
import EditUniversity from '../../Pages/University/EditUniversity'
import University from '../../Pages/University/University'
import AllMultiUniversity from '../../Pages/University/AllMultiUniversity'
import AddMultiUniversities from '../../Pages/University/AddMultiUniversities'
import EditMultiUniversity from '../../Pages/University/EditMultiUniversity'
import AllResource from '../../Pages/Resource/AllResource'
import AddResource from '../../Pages/Resource/AddResource'
import EditResource from '../../Pages/Resource/EditResource'
import AllProfession from '../../Pages/Profession/AllProfession'
import AddProfession from '../../Pages/Profession/AddProfession'
import EditProfession from '../../Pages/Profession/EditProfession'
import Login from '../auth/Login'
import MentorshipRequest from '../../Pages/MentorshipRequest/MentorshipRequest'
import MentorOnboarding from '../../Pages/MentorOnboarding/MentorOnboarding'
import GuideRequest from '../../Pages/GuideRequest/GuideRequest'
import InqueryFrom from '../../Pages/InqueryForm/InqueryFrom'
import ReachUs from '../../Pages/ReactUs/ReachUs'
import JoinAGuide from '../../Pages/JoinAGuide/JoinAGuide'

const Home = () => {
  const loginvalue = sessionStorage.getItem("login")

  return (
    <>
      {
        loginvalue ? <>
          <Header />
          <div className="rightside">
            <Routes>
              <Route path={"/dashboard"} element={<Dashboard />} />

              {/* disciplines --  */}
              <Route path={"/all-disciplines"} element={<AllDisciplines />} />
              <Route path={"/add-disciplines"} element={<AddDisciplines />} />
              <Route path={"/edit-disciplines/:id"} element={<EditDisciplines />} />

              {/* Product --  */}
              <Route path={"/all-discipline-course-details"} element={<AllDisciplinesCourseDetails />} />
              <Route path={"/add-discipline-course-details"} element={<AddDisciplinesCourseDetails />} />
              <Route path={"/edit-discipline-course-details/:id"} element={<EditDisciplinesCourseDetails />} />

              {/* Univercity */}
              <Route path={"/university"} element={<University />} />
              <Route path={"/all-university-zone"} element={<AllUniversity />} />
              <Route path={"/add-university-zone"} element={<AddUniversity />} />
              <Route path={"/edit-university-zone/:id"} element={<EditUniversity />} />
              <Route path={"/all-university"} element={<AllMultiUniversity />} />
              <Route path={"/add-university"} element={<AddMultiUniversities />} />
              <Route path={"/edit-university/:id"} element={<EditMultiUniversity />} />


              {/* --- Orders --- */}
              <Route path={"/all-mentorship-request"} element={<MentorshipRequest />} />
              <Route path={"/all-mentor-onboarding"} element={<MentorOnboarding />} />c
              <Route path={"/guide-query"} element={<GuideRequest />} />
              <Route path={"/all-inquery"} element={<InqueryFrom />} />
              <Route path={"/disciplines"} element={<AllDisplines />} />
              <Route path={"/all-reach-us"} element={<ReachUs />} />
              <Route path={"/all-join-guide-inquery"} element={<JoinAGuide />} />

              {/* --- Resource --- */}
              <Route path={"/all-resources"} element={<AllResource />} />
              <Route path={"/add-resources"} element={<AddResource />} />
              <Route path={"/edit-resources/:id"} element={<EditResource />} />


              {/* --- DisciplinesCourse --- */}
              <Route path={"/all-disciplines-course"} element={<AllDisciplinesCourse />} />
              <Route path={"/add-disciplines-course"} element={<AddDisciplinesCourse />} />
              <Route path={"/edit-disciplines-course/:id"} element={<EditDisciplinesCourse />} />

              {/* --- Banners --- */}
              <Route path={"/all-banners"} element={<AllBanner />} />
              <Route path={"/add-banner"} element={<AddBanner />} />
              <Route path={"/edit-banner/:id"} element={<EditBanner />} />


              {/* --- Guide --- */}
              <Route path={"/all-guide"} element={<AllProfession />} />
              <Route path={"/add-guide"} element={<AddProfession />} />
              <Route path={"/edit-guide/:id"} element={<EditProfession />} />

              {/* --- Orders --- */}
              <Route path={"/all-orders"} element={<AllOrder />} />
              <Route path={"/edit-order/:id"} element={<EditOrder />} />





              {/* all-shop */}

            </Routes>
          </div>

        </> : < Login />
      }
    </>
  )
}

export default Home