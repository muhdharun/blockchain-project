**Activate the virtual env**
```
source blockchahin-env/bin/activate
```

**Install all packages**
```
pip3 install -r requirements.txt
```

Make sure to acivate the venv

```
python -m pytest backend/tests
```

**Run the application and API**

Make sure to activate the venv

```
python -m backend.app
```

**Run a peer instance**

Make sure to activate venv.

```

export PEER=True && python3 -m backend.app
```

**Run the frontend**

In the frontend directory:
```
npm run start
```
