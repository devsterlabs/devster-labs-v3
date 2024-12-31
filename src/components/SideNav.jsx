import { Button } from "./Button";
import { ButtonBlack } from "./ButtunBlack";
import { CrossICon } from "./CrossIcon";
import { EyesBlack } from "./EyesBlack";
import { Menu } from "./Menu";

export function SideNav() {
  return (
    <>
      <input type="checkbox" name="openNav" id="openNav" defaultChecked />
      <div className="sidenav-container">
        <div className="sidenav-bg">
          <div className="button-left">
            <Button variant="light" />
            <ButtonBlack variant="light" />
          </div>
        </div>
        <Menu />
        <div className="sidenav-header">
          <EyesBlack />
          <CrossICon />
        </div>
      </div>
    </>
  );
}
