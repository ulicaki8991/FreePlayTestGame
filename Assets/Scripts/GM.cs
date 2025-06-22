using System.Collections;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class GM : MonoBehaviour
{
    [SerializeField] CameraFollow cameraFollow;
    [SerializeField] GameObject[] objectsOfPlayer;
    [SerializeField] GameObject Player;
    public bool EndGame = false;

    [Header("Tutorial")]
    [SerializeField] GameObject TutorialSlider;
    [SerializeField] Image[] RegSlider;
    bool TutorialActive = true;

    [Header("UI")]
    [SerializeField] Image[] HiddingImages;
    [SerializeField] GameObject Fader;
    [SerializeField] GameObject Fail;
    [SerializeField] GameObject CTA;
    [Header("Audio")]
    [SerializeField] AudioSource audioSource;
    [SerializeField] AudioSource propellerAudio;
    [SerializeField] AudioClip failSound;
    [SerializeField] AudioClip brakeSound;



    [Header("ratio")]
    [SerializeField] Camera mainCamera;
    [SerializeField] float camSizeVer;
    [SerializeField] float camSizeHor;




    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
            Application.LoadLevel(0);

        if (Input.GetMouseButtonDown(0))
        {

            if (TutorialActive)
            {
                TutorialSlider.SetActive(false);
                foreach (Image img in RegSlider)
                {
                    img.DOFade(1, 0.01f);
                }
                TutorialActive = false;
            }

            if (EndGame)
            {
                InstalGame();
            }
        }

        Ratio();
    }

    void Ratio()
    {
        if (Screen.height > Screen.width)
        {
            mainCamera.orthographicSize = camSizeVer;
        }
        else
        {
            mainCamera.orthographicSize = camSizeHor;
        }
    }

    public void InGameCTA()
    {
        Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Playable.InstallFullGame();
        EndGame = true;
    }

    public void InstalGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }

    public void Die(GameObject player)
    {
        audioSource.PlayOneShot(brakeSound);
        propellerAudio.DOFade(0, 0.4f);
        player.GetComponent<Player>().controllSound = false;
        foreach (GameObject obj in objectsOfPlayer)
        {
            obj.transform.SetParent(null);
            obj.AddComponent<Rigidbody>();
        }
        Destroy(Player.GetComponent<Rigidbody>());
        Destroy(Player.GetComponent<CapsuleCollider>());
        Destroy(Player);
        cameraFollow.tracking = false;
        cameraFollow.EndTarget = player.transform.position;

        Luna.Unity.LifeCycle.GameEnded();
        StartCoroutine(FadeOut());
    }

    IEnumerator FadeOut()
    {
        yield return new WaitForSeconds(1.5f);
        audioSource.PlayOneShot(failSound);
        EndGame = true;
        foreach (Image img in HiddingImages)
        {
            img.DOFade(0, 0.3f);
        }

        Fader.SetActive(true);
        Fail.SetActive(true);
        CTA.SetActive(true);
    }
}
