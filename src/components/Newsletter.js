import { useState, useEffect } from "react"; 
import { Col } from "react-bootstrap"; 

export const Newsletter = () => { 
  const quotes = [ 
    "وليسَ يَنالُ المَجْدَ إلا ابنُ همَّةٍ\nأبتْ أن يَكونَ الصَّعبُ في نَفسهِ صَعْبا!", 
    "انهض إلى العلمِ في جدٍّ بلا كسلٍ\nنهوضَ عبدٍ إلى الخيراتِ يبتدرُ\n\nواصبر على نيلهِ صبر المُجدِّ لهُ\nفليس يُدركه من ليس يصطبرُ", 
    "بقدر الكدّ تعطى ما تروم\nفمن رام المنى ليلًا يقوم\n\nوأيام الحداثة فاغتنمها\nألا إن الحداثة لاتدوم", 
    "قال ابن القيم رحمه الله:\nالوصولُ إلى المطلوب مَوقوفٌ على همةٍ عالية ونية صحيحة.", 
    "لا شيء على هذه الأرض بغير جهد، وبغير إرغام النّفس على الكدّ، وكلّما سما الغرض كبرت المشقّة.", 
    "لَو كَانَ هذَا العِلم يحصُل بالمُـنىٰ\nما كَان يَبْقَىٰ فِي البَريَّـــــــةِ جَاهِلُ\nاجهَدْ ولا تَكْسَلْ ولَا تَكُ غَافِــــــلاً!\nفنَدامَـــــةُ الُعقْـبَىٰ لِمَنْ يَتَكَاسَلُ" 
  ]; 

  const [currentQuote, setCurrentQuote] = useState(quotes[0]); 
  const [index, setIndex] = useState(0); 

  useEffect(() => { 
    const interval = setInterval(() => { 
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, [quotes.length]); 

  useEffect(() => { 
    setCurrentQuote(quotes[index]); 
  }, [index, quotes]); 

  return (
    <Col lg={12}> 
        <div className="newsletter-bx wow slideInUp">
        <h3 style={{ marginBottom: '20px', fontFamily: 'Cairo, sans-serif', fontWeight: 'bold' }}>اقتباسات ألهمتني:</h3> 
        <blockquote style={{lineHeight: '2.2', fontSize: '1.8rem', fontFamily: 'Almarai, serif', color: '#444' }}> 
          {currentQuote} 
        </blockquote> 
      </div> 
    </Col> 
  ); 
};