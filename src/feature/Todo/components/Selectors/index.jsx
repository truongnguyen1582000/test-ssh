import './style.css';

export default function Selector({ onSelectorClick, location }) {
  const locationSearch = location.slice(location.indexOf('=') + 1);

  return (
    <div>
      <button
        className={locationSearch === 'all' ? 'btn--active' : ''}
        onClick={() => {
          onSelectorClick('all');
        }}
      >
        All
      </button>
      <button
        className={locationSearch === 'completed' ? 'btn--active' : ''}
        onClick={() => {
          onSelectorClick('completed');
        }}
      >
        Complete
      </button>
      <button
        className={locationSearch === 'new' ? 'btn--active' : ''}
        onClick={() => {
          onSelectorClick('new');
        }}
      >
        Active
      </button>
    </div>
  );
}
