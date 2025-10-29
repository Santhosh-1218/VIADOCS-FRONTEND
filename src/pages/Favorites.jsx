import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/images2.png";
import image3 from "../assets/image3.jpg";
import {
  MoreVertical,
  Star,
  Eye,
  Edit,
  Share2,
  Trash2,
  Plus,
  Bookmark,
  FileCog,
  Sparkles,
  Bot,
} from "lucide-react";

export default function Favorites() {
  const [docs, setDocs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  // Fetch favorited docs
  const fetchFavorites = useCallback(async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    try {
      const res = await axios.get("https://viadocs-backend-production.up.railway.app/api/docs/favorites", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDocs(res.data?.docs ?? res.data ?? []);
    } catch (err) {
      console.error("Error fetching favorites:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }
      toast.error("Failed to load favorite documents");
    }
  }, [token, isLoggedIn, navigate]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  // Remove from favorites
  const removeFavorite = async (id) => {
    try {
      await axios.patch(
        `https://viadocs-backend-production.up.railway.app/api/docs/my-docs/${id}/favorite`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchFavorites(); // Refresh the list
      toast.success("Removed from favorites");
    } catch (err) {
      console.error("Error removing favorite:", err);
      toast.error("Failed to update favorites");
    }
  };

  const formatDate = (dateVal) => {
    if (!dateVal) return "-";
    try {
      return new Date(dateVal).toLocaleDateString();
    } catch {
      return String(dateVal).split("T")[0];
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#EAF6FF] via-[#F3F8FF] to-[#E4E1FF]">
      <Header />
      
      <main className="flex-1 px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Favorite Documents</h1>

          {/* Document List */}
          <div className="bg-white rounded-lg shadow-sm">
            {/* List Header */}
            <div className="grid grid-cols-[1fr,140px,80px] md:grid-cols-[1fr,180px,100px] font-semibold bg-[#EAF6FF] text-gray-700 py-3 px-4 rounded-t-lg">
              <span>Name</span>
              <span className="text-right">Date Added</span>
              <span className="text-right">Actions</span>
            </div>

            {/* List Content */}
            {docs.length === 0 ? (
              <div className="px-4 py-6 text-center text-gray-500">
                No favorite documents found.
              </div>
            ) : (
              docs
                .filter(doc => doc.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((doc) => (
                  <div
                    key={doc._id}
                    className="grid grid-cols-[1fr,140px,80px] md:grid-cols-[1fr,180px,100px] items-center py-3 px-4 border-b hover:bg-[#EAF6FF] transition-all"
                  >
                    <span className="font-medium text-gray-800 truncate">
                      {doc.name}
                    </span>
                    <span className="text-right text-gray-600">
                      {formatDate(doc.createdAt || doc.created_at)}
                    </span>
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => navigate(`/doc/${doc._id}`)}
                        className="p-1 hover:text-[#4066E0]"
                        title="View"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => removeFavorite(doc._id)}
                        className="p-1 text-yellow-400"
                        title="Remove from favorites"
                      >
                        <Star size={16} className="fill-current" />
                      </button>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </main>

         
               
           {/* ===== Viadocs Features Section ===== */}
           <section className="mt-0 py-16 bg-gradient-to-b from-[#F9FAFB] via-[#F3F4F6] to-white text-center"> {/* Added mt-0 */}
             <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
               Work Smarter with <span className="text-[#4066E0]">Viadocs</span>
             </h2>
           
             <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg mb-10 px-4">
               Whether you’re a student preparing reports or an employee managing PDFs, 
               Viadocs brings everything together in one seamless, powerful workspace.
             </p>
           
             {/* ===== Feature Cards ===== */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
               {/* Card 1 */}
               <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1">
                 <div className="flex items-center justify-center mb-4">
                   <div className="p-3 rounded-xl bg-[#EAF6FF] shadow-inner">
                     <img
                       src={image1}
                       alt="Create Documents"
                       className="w-20 h-20 object-contain"
                       loading="lazy"
                     />
                   </div>
                 </div>
                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
                   Create Documents Instantly
                 </h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   Generate professional projects, assignments, and resumes in seconds 
                   using Viadocs’ AI document builder — built for students and employees.
                 </p>
               </div>
           
               {/* Card 2 */}
               <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1">
                 <div className="flex items-center justify-center mb-4">
                   <div className="p-3 rounded-xl bg-[#EAF6FF] shadow-inner">
                     <img
                       src={image2}
                       alt="PDF Tools"
                       className="w-20 h-20 object-contain"
                       loading="lazy"
                     />
                   </div>
                 </div>
                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
                   All-in-One PDF Tools
                 </h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   Merge, split, compress, or convert PDFs instantly. 
                   Manage your files securely — anytime, anywhere.
                 </p>
               </div>
           
               {/* Card 3 */}
               <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1">
                 <div className="flex items-center justify-center mb-4">
                   <div className="p-3 rounded-xl bg-[#EAF6FF] shadow-inner">
                     <img
                       src={image3}
                       alt="AI Assistant"
                       className="w-20 h-20 object-contain"
                       loading="lazy"
                     />
                   </div>
                 </div>
                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
                   AI-Powered Assistance
                 </h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   Let our AI help summarize, rewrite, or extract key data 
                   from documents — boosting your productivity and creativity.
                 </p>
               </div>
             </div>
           </section>
           


              {/* ===== Trusted Section ===== */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Built for Engineering Students & Employees
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10 px-4">
          I’m a fresher who built <span className="text-[#4066E0] font-semibold">Viadocs</span> 
          for engineering students and professionals — making document creation, editing, 
          and PDF tools smarter and easier to use.
        </p>
      </section>





















      <Footer />
    </div>
  );
}
