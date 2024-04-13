import TaskItem from "../TaskItem";
import Flashcard from "@components/utils/flashcard/Flashcard";

export default function FlashcardSetTask(props) {
	const faceClassName =
		"border-2 border-neutral-inverse-one rounded-sm w-96 h-48";

	return (
		<TaskItem title={props.title}>
			<Flashcard
				className="col-span-3 w-96 h-48"
				frontFaceClassName={faceClassName + " bg-neutral-one "}
				backFaceClassName={faceClassName + " bg-neutral-two"}
				height="16em"
				front={<div>FRONT</div>}
				back={
					<div>
						BACK Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
						sit! Dolor facilis odit quam accusantium temporibus cum magnam
						nostrum alias nobis possimus, eos dicta voluptate delectus enim
						commodi eaque voluptas.
					</div>
				}
			/>
		</TaskItem>
	);
}
