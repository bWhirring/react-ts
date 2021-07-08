let data = {};

export function DragData(state = data, action) {
  switch (action.type) {
    case "DRAG":
      return action.data;

    default:
      return state;
  }
}
