const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost/playground")
	.then(() => console.log("connected to db..."))
	.catch((err) => console.error(err));

const productSchema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	description: { type: String, required: true },
	category: { type: String, required: true },
	count: { type: Number, default: 1 },
	timeStamp: { type: Number, default: Date.now },
});
const Course = mongoose.model("product", productSchema);

createCourse = async (id, cate) => {
	const course = new Course({
		name: id,
		price: 10.0,
		description: "helloworld",
		category: cate,
	});

	const result = await course.save();
	console.log(result);
};

// getCourses = () => {
// 	const courses = Course.find();
// 	return courses;
// };
// getCourses = async () => {
// 	const courses = await Course.find();
// 	return courses;
// };

for (let i = 0; i < 15; i++) {
	const category = ["addidas", "nike", "gucci"];
	createCourse(`product - ${i.toString()}`, category[i % 3]);
}

// module.exports = getCourses;
