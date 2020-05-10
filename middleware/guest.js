export default function({ store, redirect }) {
	if (store.getters["authenticated"]) {
		alert('hello');
		return redirect("/account");
	}
}
