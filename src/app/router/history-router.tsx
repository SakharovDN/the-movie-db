import { useLayoutEffect, useState } from "react";
import { Router, RouterProps } from "react-router-dom";
import { BrowserHistory } from "history";

interface HistoryRouterProps extends Partial<RouterProps> {
  history: BrowserHistory;
}

export const HistoryRouter = ({ history, ...props }: HistoryRouterProps) => {
  const { action, location } = history;
  const [state, setState] = useState({ action, location });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
