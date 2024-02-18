<?php
class Loader
{
	private $namespaces = [];

	public function registerNamespaces(array $definition)
	{
		$this->namespaces = $definition;

		return $this;
	}

	public function register()
	{
		spl_autoload_register([$this, 'handle']);
	}

	public function handle($name)
	{
		$parts = explode('\\', $name);

		if (isset($this->namespaces[$parts[0]])) {

			$path = $this->namespaces[$parts[0]];

			array_shift($parts);

			$fileName = $path . DIRECTORY_SEPARATOR . implode(DIRECTORY_SEPARATOR, $parts) . '.class.php';

			if (file_exists($fileName)) {
				require_once $fileName;
			}
		}
	}
}
