/* tslint:disable */
import { Components } from "formiojs";
const ParentComponent = (Components as any).components.textarea;
import editForm from "./Component.form";

import { Constants } from "../Common/Constants";

const ID = "simpletextarea";
const DISPLAY = "Multiple Lines Answer";

export default class Component extends (ParentComponent as any) {
  static schema(...extend) {
    return ParentComponent.schema(
      {
        type: ID,
        label: DISPLAY,
        key: ID,
        rows: 3,
        wysiwyg: false,
        editor: "",
        spellcheck: true,
        fixedSize: true,
        inputFormat: "plain",
        validate: {
          minWords: "",
          maxWords: "",
        },
      },
      ...extend
    );
  }

  public static editForm = editForm;

  static get builderInfo() {
    return {
      title: DISPLAY,
      group: "simple",
      icon: "comment-o",
      weight: 30,
      documentation: Constants.DEFAULT_HELP_LINK,
      schema: Component.schema(),
    };
  }
}
