import SpotlightCard from "./ui/spot-light-card"
import WhyUseTagExtractorCard from "./why-use-tag-extractor-card"

const AboutBody = () => {
  return (
    <SpotlightCard className="custom-spotlight-card md:p-10 lg:p-14 mb-10" spotlightColor="rgba(255, 255, 255, 0.2)">
        <div className="text-base lg:text-lg text-white text-center space-y-8">
          <p>
            Welcome to YT Tags Extractor, your go-to tool for extracting YouTube video tags quickly and easily. Our platform helps content creators, SEO experts, and digital marketers get the most relevant tags for their videos.
          </p>
          <p>
            We know how important video optimization is. YouTube tags play a key role in improving your video's ranking, visibility, and engagement. That’s why we built a fast, free, and easy-to-use tool that extracts tags from any YouTube video within seconds.
          </p>
          <p>
            Our mission is to simplify the process of YouTube SEO. Many content creators struggle to find the best tags for their videos. With YT Tags Extractor, you don’t have to guess anymore. Just enter the video URL, and our system will fetch the tags instantly. You can then use these tags to optimize your videos and increase your reach.
          </p>
          <p>
            At YT Tags Extractor, we are committed to providing a smooth user experience. Our tool is designed with simplicity and efficiency in mind. Whether you’re a beginner YouTuber or an experienced marketer, you can use our platform without any hassle.
          </p>
          <p>
            We understand that YouTube’s algorithm keeps changing, which is why we are always updating our tool to match the latest trends. We aim to help our users stay ahead in the competitive world of YouTube content creation.
          </p>
          <WhyUseTagExtractorCard />
          <p>
            We believe that every YouTube creator deserves the right tools to succeed. That’s why we keep improving YT Tags Extractor to ensure you get the best results. Whether you are working on a new video or analyzing your competition, our tool will make your job easier.
          </p>
          <p>
            If you have any questions, feedback, or suggestions, we’d love to hear from you. Feel free to reach out to us anytime. Your support and feedback help us improve and offer a better service.
          </p>
          <p>
            Thank you for choosing YT Tags Extractor. We hope our tool helps you grow your YouTube channel and achieve your goals!
          </p>
        </div>
      </SpotlightCard>
  )
}

export default AboutBody