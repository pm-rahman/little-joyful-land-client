const Articles = () => {
    return (
        <div className="rounded-lg">
            <h4 className="text-xl md:text-3xl mb-5 font-extrabold">Read Our Articles</h4>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="card bg-base-100 shadow-xl" data-aos="zoom-in">
                    <img className="rounded-md max-h-full max-w-auto m-auto" src="https://i.pinimg.com/originals/dd/7d/82/dd7d829052d31a2dd8cc8f50015f3ea2.jpg" alt="" data-aos-duration="1000" />
                    <div className="card-body">
                        <h2 className="card-title">
                            Choosing the Right Toys for Children: A Comprehensive Guide
                        </h2>
                        <ol className="space-y-1">
                            <li>1. Understanding the Importance of Play: In this section </li>
                            <li>2. we will discuss the significance of play in a child's life and how it contributes to their overall development.</li>
                            <li>3. We will explore the various types of play and highlight the benefits of each,</li>
                            <li>4. emphasizing the role of toys in facilitating different forms of play. Every child has unique needs and interests based on their age and developmental stage. </li>
                        </ol>

                        We will suggest suitable toys that cater to their cognitive, physical, and emotional needs.
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl" data-aos="zoom-in">
                    <img className="rounded-md max-h-full max-w-auto m-auto" src="https://img-us.aosomcdn.com/thumbnail/100/n0/product/2022/12/30/txc90f18560dfc915.jpg" alt="" data-aos-duration="1000" />
                    <div className="card-body">
                        <h2 className="card-title">
                            Engaging and Educational Toys for Children
                        </h2>
                        <h5>Introduction:
                            Toys play a crucial role in a child's development, providing them with opportunities to learn and grow while having fun.,</h5>
                        <ol className="space-y-1">
                            <li> Building Blocks:
                                Building blocks are timeless toys that foster creativity and spatial awareness. They help children develop fine motor skills, problem-solving abilities, and logical thinking. </li>
                        </ol>

                        Conclusion:
                        The toys mentioned above offer a perfect blend of entertainment and education, ensuring that children have a fulfilling and enriching playtime experience.
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl" data-aos="zoom-in">
                    <img className="rounded-md max-h-full max-w-auto m-auto" src="https://isakaabengaluru.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/12/08010134/He7985ebaeef34abd8cc6eec712165d28x.jpg_960x960.webp" alt="" data-aos-duration="1000" />
                    <div className="card-body">
                        <h2 className="card-title">
                            Must-Have Children's Toys for Endless Fun and Learning
                        </h2>
                        <h6>Introduction:
                            Children's toys are more than just playthings; they are powerful tools that foster imagination.</h6>
                        <ol className="space-y-1">
                            <li>1.LEGO Sets:
                                LEGO sets have been captivating young minds for decades. problem-solving skills</li>
                            <li>2.Building Blocks:
                                In addition to LEGO sets, and problem-solving abilities. </li>
                            <li>3. Art Supplies:
                                Encouraging artistic expression is crucial for children's development.</li>
                        </ol>

                        Conclusion:
                        Choosing the right toys for children can contribute significantly to their development and enjoyment.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;